import { useEffect, useState } from "react";
import { ref, onValue, remove } from "firebase/database";
import { DATABASE } from "../../firebase";
import "./ForumList.css";

function ForumList() {
  const [TOPICS, setTopics] = useState([]);

  useEffect(() => {
    const TOPICS_REF = ref(DATABASE, "topics");

    onValue(TOPICS_REF, (snapshot) => {
      if (snapshot.exists()) {
        const DATA = snapshot.val();
        const TOPICS_ARRAY = Object.keys(DATA).map((key) => ({
          id: key,
          ...DATA[key],
        }));
        setTopics(TOPICS_ARRAY);
      }
    });
  }, []);

  const handleDeleteComment = (TOPIC_ID, COMMENT_ID) => {
    const COMMENT_REF = ref(
      DATABASE,
      `topics/${TOPIC_ID}/comments/${COMMENT_ID}`
    );
    remove(COMMENT_REF);
  };

  return (
    <div className="forum-list">
      {TOPICS.map((TOPIC) => (
        <div key={TOPIC.id} className="topic-card">
          <h2>{TOPIC.topic}</h2>
          <div className="comments">
            {Object.keys(TOPIC.comments).map((COMMENT_ID) => {
              const COMMENT = TOPIC.comments[COMMENT_ID];
              return (
                <div key={COMMENT_ID} className="comment">
                  <p>
                    <strong>{COMMENT.username}</strong>: {COMMENT.message}
                  </p>
                  <span>{COMMENT.date}</span>
                  <button className="button-crud"
                    onClick={() => handleDeleteComment(TOPIC.id, COMMENT_ID)}
                  >DELETE COMMENT</button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ForumList;

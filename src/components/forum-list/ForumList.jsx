import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { DATABASE } from "../../firebase";
import "./ForumList.css";

function ForumList() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    const topicsRef = ref(DATABASE, "topics");

    onValue(topicsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const topicsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setTopics(topicsArray);
      }
    });
  }, []);

  return (
    <div className="forum-list">
      {topics.map((topic) => (
        <div key={topic.id} className="topic-card">
          <h2>{topic.topic}</h2>
          <div className="comments">
            {Object.keys(topic.comments).map((commentId) => {
              const COMMENT = topic.comments[commentId];
              return (
                <div key={commentId} className="comment">
                  <p><strong>{COMMENT.username}</strong>: {COMMENT.message}</p>
                  <span>{COMMENT.date}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForumList;
import { useEffect, useState } from "react";
import { ref, onValue, remove } from "firebase/database";
import { DATABASE } from "../../firebase";
import { Link } from "react-router-dom";
import "./ForumList.css";

function ForumList() {
  const [topics, setTopics] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const topicsRef = ref(DATABASE, "topics");

    try {
      onValue(topicsRef, (snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const topicsArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
            comments: data[key].comments || {} 
          }));
          setTopics(topicsArray);
        } else {
          setTopics([]);
        }
        setIsLoading(false);
      });
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  }, []);

  const handleDeleteComment = (topicId, commentId) => {
    const commentRef = ref(
      DATABASE,
      `topics/${topicId}/comments/${commentId}`
    );
    remove(commentRef);
  };

  if (isLoading) {
    return <div className="loading">Loading forum topics...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!topics || topics.length === 0) {
    return <div className="no-topics">No topics available in the forum</div>;
  }

  return (
    <div className="forum-list">
      {topics.map((topic) => (
        <div key={topic.id} className="topic-card">
          <div className="topic-add-comment-container">
            <h2>{topic.topic}</h2>
            <Link to={`/form-add-comment/${topic.id}`}>
              <button className="button-add-crud">ADD COMMENT</button>
            </Link>
          </div>
          
          <div className="comments">
            {Object.keys(topic.comments).map((commentId) => {
              const comment = topic.comments[commentId];
              return (
                <div key={commentId} className="comment">
                  <p>
                    <strong>{comment.username}</strong>: {comment.message}
                  </p>
                  <span>{comment.date}</span>
                  <div className="comment-buttons">
                    <button 
                      className="button-delete-crud"
                      onClick={() => handleDeleteComment(topic.id, commentId)}
                    >
                      DELETE COMMENT
                    </button>
                    <Link to={`/form-update-comment/${topic.id}/${commentId}`}>
                      <button className="button-update-crud">
                        UPDATE COMMENT
                      </button>
                    </Link>
                  </div>
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
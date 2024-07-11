import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getAccessToken } from "@/utils/auth"; 

const CommentList = ({ articleId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { access_token } = getAccessToken(); 

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:9999/api/comment/${articleId}`, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        setComments(response.data);
      } catch (error) {
        setError('Error fetching comments');
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [articleId, access_token]); 

  return (
    <div className="comment-list">
      <h3 style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.5rem', marginBottom: '1rem' }}>Comments</h3>

      {loading && <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem' }}>Loading comments...</p>}
      {error && <p className="error-message" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem', color: 'red' }}>{error}</p>}
      {comments.length === 0 && !loading && <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1rem' }}>No comments yet.</p>}
      {comments.length > 0 && (
        <ul className="comment-items" style={{ listStyleType: 'none', padding: 0 }}>
          {comments.map(comment => (
            <li key={comment._id} className="comment-item" style={{ border: '1px solid #ccc', borderRadius: '5px', marginBottom: '1rem', padding: '1rem' }}>
              <div className="comment-user" style={{ marginBottom: '0.5rem' }}>
                <strong style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem' }}>{comment.user_id.fullName}</strong>
              </div>
              <div className="comment-text" style={{ marginBottom: '0.5rem', fontFamily: 'Arial, sans-serif', fontSize: '1rem' }}>
                {comment.commentText}
              </div>
              <div className="comment-date" style={{ fontFamily: 'Arial, sans-serif', fontSize: '0.8rem', color: '#666' }}>
                {new Date(comment.commentDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentList;

import React, { useState } from 'react';
import axios from 'axios';
import { getAccessToken } from "@/utils/auth"; 

const CommentForm = ({ article_id }) => {
  const [commentData, setCommentData] = useState({
    commentText: '',
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCommentData({ ...commentData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const { access_token } = getAccessToken(); 
      const response = await axios.post('http://localhost:9999/api/comment/', {
        article_id,
        commentText: commentData.commentText,
      }, {
        withCredentials: true, 
        headers: {
          Authorization: `Bearer ${access_token}`, 
          'Content-Type': 'application/json',
        },
      });
      console.log('Comment created:', response.data);
      setCommentData({ commentText: '' }); 
      setSuccessMessage('Comment successfully.'); // Thiết lập thông báo thành công
      window.location.reload(); // Load lại trang sau khi gửi thành công
    } catch (error) {
      console.error('Error creating comment:', error);
      if (error.response && error.response.status === 400) {
        setError(error.response.data.message); // Hiển thị thông báo lỗi từ server
      } else {
        setError('An error comment. Please login to comment.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row">
      <div className="col-lg-8">
        <form className="form-contact contact_form mb-80" onSubmit={handleSubmit}>
          {error && <div className="alert alert-danger">{error}</div>}
          {successMessage && <div className="alert alert-success">{successMessage}</div>}
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <textarea
                  className="form-control w-100"
                  name="commentText"
                  id="commentText"
                  cols={30}
                  rows={4}
                  placeholder="Enter Message"
                  value={commentData.commentText}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="button boxed-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentForm;

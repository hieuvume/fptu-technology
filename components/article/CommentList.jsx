import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "@/provider/AuthProvider";
import { getAccessToken } from "@/utils/auth";
import { FaTrash } from "react-icons/fa";
import { Modal, Button } from "react-bootstrap";

const CommentList = ({ articleId }) => {
  const { isAdmin, isModerator } = useAuth();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(10);
  const { access_token } = getAccessToken();
  const [showModal, setShowModal] = useState(false);
  const [commentToDelete, setCommentToDelete] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:9999/api/comment/${articleId}`,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
        const sortedComments = response.data.sort(
          (a, b) => new Date(b.commentDate) - new Date(a.commentDate)
        );
        setComments(sortedComments);
      } catch (error) {
        setError("Error fetching comments");
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [articleId, access_token]);

  const handleDeleteComment = async (commentId) => {
    try {
      await axios.delete(`http://localhost:9999/api/comment/${commentId}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      setComments(comments.filter((comment) => comment._id !== commentId));
    } catch (error) {
      setError("Error deleting comment");
    } finally {
      setShowModal(false); 
    }
  };
  

  // Pagination
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = comments.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Show confirmation modal
  const showDeleteModal = (commentId) => {
    setCommentToDelete(commentId);
    setShowModal(true);
  };

  // Hide confirmation modal
  const hideDeleteModal = () => setShowModal(false);

  return (
    <div className="comment-list">
      <h3>Comments</h3>

      {loading && <p>Loading comments...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {currentComments.length === 0 && !loading && <p>No comments yet.</p>}
      {currentComments.length > 0 && (
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {currentComments.map((comment) => (
            <li
              key={comment._id}
              style={{
                marginBottom: "20px",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <div>
                  <b style={{ fontSize: "1.2rem", marginRight: "5px" }}>
                    {comment.user_id.fullName}:
                  </b>
                  {comment.commentText}
                </div>
                {(isAdmin() || isModerator()) && (
                  <div>
                    <FaTrash
                      onClick={() => showDeleteModal(comment._id)}
                      style={{
                        color: "#dc3545",
                        fontSize: "1.2rem",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                )}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#999" }}>
                {new Date(comment.commentDate).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Pagination */}
      {comments.length > commentsPerPage && (
        <ul
          className="pagination"
          style={{
            display: "flex",
            justifyContent: "center",
            listStyleType: "none",
            padding: 0,
          }}
        >
          {Array(Math.ceil(comments.length / commentsPerPage))
            .fill()
            .map((_, index) => (
              <li
                key={index}
                className={currentPage === index + 1 ? "active" : ""}
                style={{ margin: "0 5px" }}
              >
                <button
                  onClick={() => paginate(index + 1)}
                  style={{
                    backgroundColor:
                      currentPage === index + 1 ? "#007bff" : "#fff",
                    color: currentPage === index + 1 ? "#fff" : "#007bff",
                    border: "1px solid #007bff",
                    padding: "5px 10px",
                    borderRadius: "3px",
                    cursor: "pointer",
                  }}
                >
                  {index + 1}
                </button>
              </li>
            ))}
        </ul>
      )}

      {/* Confirmation Modal */}
      <Modal show={showModal} onHide={hideDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this comment?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideDeleteModal}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => handleDeleteComment(commentToDelete)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CommentList;

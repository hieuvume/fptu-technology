"use client";
import React, { useState, useEffect } from "react";
import useAuth from "@/provider/AuthProvider";
import { format } from "date-fns";
import axios from "axios";
import { getAccessToken } from "@/utils/auth"; // Import hàm getAccessToken từ auth.js

const Profile = () => {
  const { user, updateUser } = useAuth(); // Thêm hàm updateUser từ context AuthProvider
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      setEditedUser({
        username: user.username,
        email: user.email,
        fullName: user.fullName,
        dateOfBirth: format(new Date(user.dateOfBirth), "yyyy-MM-dd"),
        role: user.role,
      });
    }
  }, [user]);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      setLoading(true);
      const { access_token } = getAccessToken(); // Lấy access_token từ localStorage hoặc cookies
      const response = await axios.put(
        `http://localhost:9999/api/users/me/${user._id}`,
        editedUser,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setEditing(false);
      console.log("Updated user:", response.data);

      // Cập nhật lại thông tin người dùng trong context
      updateUser(response.data); // Giả sử hàm updateUser cập nhật thông tin người dùng

    } catch (error) {
      setError(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelClick = () => {
    setEditing(false);
    setError(null);
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: 150 }}
                />
                <h5 className="my-3">{user.fullName}</h5>

                <div className="d-flex justify-content-center">
                  {!editing && (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleEditClick}
                    >
                      Edit Profile
                    </button>
                  )}
                  {editing && (
                    <>
                      <button
                        type="button"
                        className="btn btn-success ms-2"
                        onClick={handleSaveClick}
                        disabled={loading}
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger ms-2"
                        onClick={handleCancelClick}
                        disabled={loading}
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    {editing ? (
                      <input
                        type="text"
                        className="form-control"
                        value={editedUser.fullName || ""}
                        onChange={(e) =>
                          setEditedUser({
                            ...editedUser,
                            fullName: e.target.value,
                          })
                        }
                      />
                    ) : (
                      <p className="text-muted mb-0">{user.fullName}</p>
                    )}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    {editing ? (
                      <input
                        type="email"
                        className="form-control"
                        value={editedUser.email || ""}
                        onChange={(e) =>
                          setEditedUser({
                            ...editedUser,
                            email: e.target.value,
                          })
                        }
                      />
                    ) : (
                      <p className="text-muted mb-0">{user.email}</p>
                    )}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Date Of Birth</p>
                  </div>
                  <div className="col-sm-9">
                    {editing ? (
                      <input
                        type="date"
                        className="form-control"
                        value={editedUser.dateOfBirth || ""}
                        onChange={(e) =>
                          setEditedUser({
                            ...editedUser,
                            dateOfBirth: e.target.value,
                          })
                        }
                      />
                    ) : (
                      <p className="text-muted mb-0">
                        {format(new Date(user.dateOfBirth), "dd/MM/yyyy")}
                      </p>
                    )}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Role</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user.role}</p>
                  </div>
                </div>
                {error && (
                  <div className="alert alert-danger mt-3" role="alert">
                    {error}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

"use client";
import useAuth from "@/provider/AuthProvider";
import { format } from "date-fns";

const Profile = () => {
  const { user } = useAuth();

  const formattedDateOfBirth = user?.dateOfBirth
    ? format(new Date(user?.dateOfBirth), "dd/MM/yyyy")
    : "";

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

                <div className="d-flex justify-content-center ">
                  <button
                    type="button"
                    data-mdb-button-init=""
                    data-mdb-ripple-init=""
                    className="btn btn-primary"
                    onClick={() => (window.location.href = "/changepassword")}
                  >
                    Change Passowrd
                  </button>
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
                    <p className="text-muted mb-0">{user.fullName}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user.email}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Phone</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">0376883078</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Date Of Birth</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{formattedDateOfBirth}</p>
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
              </div>
            </div>
            <div className="row"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

"use client";
import useAuth from "@/provider/AuthProvider";
import ContributorForm from "./ContributorForm";

const ContributorWrapper = () => {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h2>Become A Contributor</h2>
              <p>
                You can contribute to us by submitting your articles. You can
                submit your articles by registering as a contributor.
              </p>
              {!isAuthenticated() && (
                <>
                  <p>
                    You need to login or register first to become a contributor.
                  </p>
                  <a href="/register" className="btn btn-primary mr-2">
                    Register
                  </a>
                  <a href="/login" className="btn btn-primary">
                    Login
                  </a>
                </>
              )}
            </div>
            {isAuthenticated() && <ContributorForm />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContributorWrapper;

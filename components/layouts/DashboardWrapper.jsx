"use client";
import useAuth from "@/provider/AuthProvider";
import Link from "next/link";

const DashboardWrapper = ({ children }) => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header>
      <div className="header-area">
        <div className="main-header ">
          <div className="header-top black-bg d-none d-md-block">
            <div className="container">
              <div className="col-xl-12">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="header-info-left"></div>
                  <div className="header-info-right">
                    <ul className="header-social mb-0">
                      {isAuthenticated() ? (
                        <>
                          <li>
                            <Link href="/profile" style={{ fontWeight: "500" }}>
                              Hello, {user.username}
                            </Link>
                          </li>
                          {user.role !== "USER" && (
                            <li>
                              <Link
                                href="/dashboard"
                                style={{ fontWeight: "500" }}
                              >
                                Dashboard
                              </Link>
                            </li>
                          )}
                          <li>
                            <Link
                              href="#"
                              onClick={logout}
                              style={{ fontWeight: "500" }}
                            >
                              Logout
                            </Link>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <Link
                              href="/register"
                              style={{ fontWeight: "500" }}
                            >
                              Register
                            </Link>
                          </li>
                          <li>
                            <Link href="/login" style={{ fontWeight: "500" }}>
                              Login
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-mid d-none d-md-block">
            <div className="container">
              <div className="row d-flex align-items-center">
                <div className="col-xl-3 col-lg-3 col-md-3 " >
                  <div className="logo">
                    <Link href="/">
                      <img src="/assets/img/logo.png" alt="" width={200} />
                    </Link>
                
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9">
                  <div className="header-banner f-right ">
                  <input className="text-center"
                      style={{
                        width: "120%",
                        padding: "10px",
                        border: "none",
                        margin: 0,
                        height: "auto",
                        borderRadius: "20px",
                        backgroundColor: "#f0f0f5",
                        fontSize: "14px"
                      }}
                      placeholder="Tìm sản các bài báo công nghệ"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {children}
        </div>
      </div>
    </header>
  );
};

export default DashboardWrapper;

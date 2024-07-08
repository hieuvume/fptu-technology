"use client";
import Link from "next/link";
import DashboardWrapper from "./DashboardWrapper";
import useAuth from "@/provider/AuthProvider";

const DashboardHeader = () => {
  const { isAdmin, isModerator, isAuthor } = useAuth();
  return (
    <DashboardWrapper>
      <div className="header-bottom header-sticky">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-10 col-lg-10 col-md-12 header-flex">
              <div className="sticky-logo info-open">
                <Link href="/">
                  <img src="/assets/img/logo/logo.png" alt="" />
                </Link>
              </div>
              <div className="main-menu d-none d-md-block">
                <nav>
                  <ul id="navigation">
                    <li>
                      <Link href="/">Reback to Home</Link>
                    </li>
                    <li>
                      <Link href="/dashboard">Dashboard</Link>
                    </li>
                    {isAdmin() && (
                      <>
                        <li>
                          <Link href="/dashboard/users">Users</Link>
                        </li>
                        <li>
                          <Link href="/dashboard/categories">Categories</Link>
                        </li>
                      </>
                    )}
                    {(isAdmin() || isModerator() || isAuthor()) && (
                      <li>
                        <Link href="/dashboard/articles">Articles</Link>
                      </li>
                    )}
                    {(isAdmin()) && (
                      <li>
                        <Link href="/dashboard/applications">Applications</Link>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default DashboardHeader;

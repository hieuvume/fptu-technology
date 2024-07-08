"use client";
import Link from "next/link";
import DashboardWrapper from "./DashboardWrapper";
import useAuth from "@/provider/AuthProvider";

const Header = () => {
  const { firstLoaded, isUser, isAuthenticated } = useAuth();

  return (
    <DashboardWrapper>
      <div className="header-bottom header-sticky">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-10 col-lg-10 col-md-12 header-flex">
              {/* sticky */}
              <div className="sticky-logo info-open">
                <Link href="/">
                  <img src="/assets/img/logo/logo.png" alt="" />
                </Link>
              </div>
              {/* Main-menu */}
              <div className="main-menu d-none d-md-block">
                <nav>
                  <ul id="navigation">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/category">Category</Link>
                    </li>
                    <li>
                      <Link href="/about">About</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact</Link>
                    </li>
                    {((firstLoaded && !isAuthenticated()) || (isAuthenticated() && isUser())) && (
                      <li>
                        <Link href="/contributor">Become a Contributor</Link>
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

export default Header;

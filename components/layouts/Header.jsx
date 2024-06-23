"use client";
import Link from "next/link";
import DashboardWrapper from "./DashboardWrapper";

const Header = () => {

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
                  </ul>
                </nav>
              </div>
            </div>
            {/* Mobile Menu */}
            <div className="col-12">
              <div className="mobile_menu d-block d-md-none">
                <div className="slicknav_menu">
                  <a
                    href="#"
                    aria-haspopup="true"
                    role="button"
                    tabIndex={0}
                    className="slicknav_btn slicknav_collapsed"
                    style={{ outline: "none" }}
                  >
                    <span className="slicknav_menutxt">MENU</span>
                    <span className="slicknav_icon">
                      <span className="slicknav_icon-bar" />
                      <span className="slicknav_icon-bar" />
                      <span className="slicknav_icon-bar" />
                    </span>
                  </a>
                  <ul
                    className="slicknav_nav slicknav_hidden"
                    aria-hidden="true"
                    role="menu"
                    style={{ display: "none" }}
                  >
                    <li>
                      <a href="/" role="menuitem" tabIndex={-1}>
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="categori.html" role="menuitem" tabIndex={-1}>
                        Category
                      </a>
                    </li>
                    <li>
                      <a href="about.html" role="menuitem" tabIndex={-1}>
                        About
                      </a>
                    </li>
                    <li>
                      <a href="latest_news.html" role="menuitem" tabIndex={-1}>
                        Latest News
                      </a>
                    </li>
                    <li>
                      <a href="contact.html" role="menuitem" tabIndex={-1}>
                        Contact
                      </a>
                    </li>
                    <li className="slicknav_collapsed slicknav_parent">
                      <a
                        href="#"
                        role="menuitem"
                        aria-haspopup="true"
                        tabIndex={-1}
                        className="slicknav_item slicknav_row"
                        style={{ outline: "none" }}
                      />
                      <a href="#" tabIndex={-1}>
                        Pages
                      </a>
                      <span className="slicknav_arrow">+</span>
                      <ul
                        className="submenu slicknav_hidden"
                        role="menu"
                        aria-hidden="true"
                        style={{ display: "none" }}
                      >
                        <li>
                          <a href="elements.html" role="menuitem" tabIndex={-1}>
                            Element
                          </a>
                        </li>
                        <li>
                          <a href="blog.html" role="menuitem" tabIndex={-1}>
                            Blog
                          </a>
                        </li>
                        <li>
                          <a
                            href="single-blog.html"
                            role="menuitem"
                            tabIndex={-1}
                          >
                            Blog Details
                          </a>
                        </li>
                        <li>
                          <a href="details.html" role="menuitem" tabIndex={-1}>
                            Categori Details
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default Header;

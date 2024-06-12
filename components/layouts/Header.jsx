const Header = () => {
  return (
    <header>
      {/* Header Start */}
      <div className="header-area">
        <div className="main-header ">
          <div className="header-top black-bg d-none d-md-block">
            <div className="container">
              <div className="col-xl-12">
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="header-info-left">
                    <ul>
                      <li>
                        <img src="/assets/img/icon/header_icon1.png" alt="" /> 34ºc, Sunny{" "}
                      </li>
                      <li>
                        <img src="/assets/img/icon/header_icon1.png" alt="" /> Tuesday, 18th June, 2019
                      </li>
                    </ul>
                  </div>
                  <div className="header-info-right">
                    <ul className="header-social">
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-mid d-none d-md-block">
            <div className="container">
              <div className="row d-flex align-items-center">
                {/* Logo */}
                <div className="col-xl-3 col-lg-3 col-md-3">
                  <div className="logo">
                    <a href="/">
                      <img src="/assets/img/logo/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9">
                  <div className="header-banner f-right ">
                    <img src="/assets/img/hero/header_card.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-bottom header-sticky">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-10 col-lg-10 col-md-12 header-flex">
                  {/* sticky */}
                  <div className="sticky-logo info-open">
                    <a href="/">
                      <img src="/assets/img/logo/logo.png" alt="" />
                    </a>
                  </div>
                  {/* Main-menu */}
                  <div className="main-menu d-none d-md-block">
                    <nav>
                      <ul id="navigation">
                        <li>
                          <a href="/">Home</a>
                        </li>
                        <li>
                          <a href="/danh-muc">Category</a>
                        </li>
                        <li>
                          <a href="/about">About</a>
                        </li>
                        <li>
                          <a href="/contact">Contact</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4">
                  <div className="header-right-btn f-right d-none d-lg-block">
                    <i className="fas fa-search special-tag" />
                    <div className="search-box">
                      <form action="#">
                        <input type="text" placeholder="Search" />
                      </form>
                    </div>
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
        </div>
      </div>
      {/* Header End */}
    </header>

  )
}

export default Header
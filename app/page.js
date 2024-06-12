
export default function Home() {
  return (
    <>
      <div className="trending-area fix">
        <div className="container">
          <div className="trending-main">
            <div className="row">
              <div className="col-lg-12">
                <div className="trending-tittle">
                  <strong>Trending now</strong>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                {/* Trending Top */}
                <div className="trending-top mb-30">
                  <div className="trend-top-img">
                    <img src="assets/img/trending/trending_top.jpg" alt="" />
                    <div className="trend-top-cap">
                      <span>Appetizers</span>
                      <h2>
                        <a href="/post_detail">
                          Welcome To The Best Model Winner
                          <br /> Contest At Look of the year
                        </a>
                      </h2>
                    </div>
                  </div>
                </div>
                {/* Trending Bottom */}
                <div className="trending-bottom">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="single-bottom mb-35">
                        <div className="trend-bottom-img mb-30">
                          <img
                            src="assets/img/trending/trending_bottom1.jpg"
                            alt=""
                          />
                        </div>
                        <div className="trend-bottom-cap">
                          <span className="color1">Lifestyple</span>
                          <h4>
                            <a href="/post_detail">
                              Get the Illusion of Fuller Lashes by “Mascng.”
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="single-bottom mb-35">
                        <div className="trend-bottom-img mb-30">
                          <img
                            src="assets/img/trending/trending_bottom2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="trend-bottom-cap">
                          <span className="color2">Sports</span>
                          <h4 />
                          <h4>
                            <a href="/post_detail">
                              Get the Illusion of Fuller Lashes by “Mascng.”
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="single-bottom mb-35">
                        <div className="trend-bottom-img mb-30">
                          <img
                            src="assets/img/trending/trending_bottom3.jpg"
                            alt=""
                          />
                        </div>
                        <div className="trend-bottom-cap">
                          <span className="color3">Travels</span>
                          <h4>
                            <a href="/post_detail">
                              {" "}
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Riht content */}
              <div className="col-lg-4">
                <div className="trand-right-single d-flex">
                  <div className="trand-right-img">
                    <img src="assets/img/trending/right1.jpg" alt="" />
                  </div>
                  <div className="trand-right-cap">
                    <span className="color1">Concert</span>
                    <h4>
                      <a href="/post_detail">
                        Welcome To The Best Model Winner Contest
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="trand-right-single d-flex">
                  <div className="trand-right-img">
                    <img src="assets/img/trending/right2.jpg" alt="" />
                  </div>
                  <div className="trand-right-cap">
                    <span className="color3">sea beach</span>
                    <h4>
                      <a href="/post_detail">
                        Welcome To The Best Model Winner Contest
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="trand-right-single d-flex">
                  <div className="trand-right-img">
                    <img src="assets/img/trending/right3.jpg" alt="" />
                  </div>
                  <div className="trand-right-cap">
                    <span className="color2">Bike Show</span>
                    <h4>
                      <a href="/post_detail">
                        Welcome To The Best Model Winner Contest
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="trand-right-single d-flex">
                  <div className="trand-right-img">
                    <img src="assets/img/trending/right4.jpg" alt="" />
                  </div>
                  <div className="trand-right-cap">
                    <span className="color4">See beach</span>
                    <h4>
                      <a href="/post_detail">
                        Welcome To The Best Model Winner Contest
                      </a>
                    </h4>
                  </div>
                </div>
                <div className="trand-right-single d-flex">
                  <div className="trand-right-img">
                    <img src="assets/img/trending/right5.jpg" alt="" />
                  </div>
                  <div className="trand-right-cap">
                    <span className="color1">Skeping</span>
                    <h4>
                      <a href="/post_detail">
                        Welcome To The Best Model Winner Contest
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Trending Area End */}
      {/*   Weekly-News start */}
      <div className="weekly-news-area pt-50">
        <div className="container">
          <div className="weekly-wrapper">
            {/* section Tittle */}
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle mb-30">
                  <h3>Weekly Top News</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="weekly-news-active dot-style d-flex dot-style slick-initialized slick-slider slick-dotted">
                  <div className="slick-list draggable">
                    <div
                      className="slick-track"
                      style={{
                        opacity: 1,
                        width: 4400,
                        transform: "translate3d(-1600px, 0px, 0px)"
                      }}
                    >
                      <div
                        className="weekly-single active slick-slide slick-cloned"
                        data-slick-index={-3}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 370 }}
                      >
                        <div className="weekly-img">
                          <img src="assets/img/news/weeklyNews1.jpg" alt="" />
                        </div>
                        <div className="weekly-caption">
                          <span className="color1">Strike</span>
                          <h4>
                            <a href="#" tabIndex={-1}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="weekly-single slick-slide slick-cloned"
                        data-slick-index={-2}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 370 }}
                      >
                        <div className="weekly-img">
                          <img src="assets/img/news/weeklyNews3.jpg" alt="" />
                        </div>
                        <div className="weekly-caption">
                          <span className="color1">Strike</span>
                          <h4>
                            <a href="#" tabIndex={-1}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="weekly-single slick-slide slick-cloned"
                        data-slick-index={-1}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 370 }}
                      >
                        <div className="weekly-img">
                          <img src="assets/img/news/weeklyNews1.jpg" alt="" />
                        </div>
                        <div className="weekly-caption">
                          <span className="color1">Strike</span>
                          <h4>
                            <a href="#" tabIndex={-1}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="weekly-single slick-slide"
                        data-slick-index={0}
                        aria-hidden="true"
                        tabIndex={-1}
                        role="tabpanel"
                        id="slick-slide00"
                        aria-describedby="slick-slide-control00"
                        style={{ width: 370 }}
                      >
                        <div className="weekly-img">
                          <img src="assets/img/news/weeklyNews2.jpg" alt="" />
                        </div>
                        <div className="weekly-caption">
                          <span className="color1">Strike</span>
                          <h4>
                            <a href="#" tabIndex={-1}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="weekly-single active slick-slide slick-current slick-active"
                        data-slick-index={1}
                        aria-hidden="false"
                        tabIndex={0}
                        role="tabpanel"
                        id="slick-slide01"
                        aria-describedby="slick-slide-control01"
                        style={{ width: 370 }}
                      >
                        <div className="weekly-img">
                          <img src="assets/img/news/weeklyNews1.jpg" alt="" />
                        </div>
                        <div className="weekly-caption">
                          <span className="color1">Strike</span>
                          <h4>
                            <a href="#" tabIndex={0}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="weekly-single slick-slide slick-active"
                        data-slick-index={2}
                        aria-hidden="false"
                        tabIndex={0}
                        role="tabpanel"
                        id="slick-slide02"
                        aria-describedby="slick-slide-control02"
                        style={{ width: 370 }}
                      >
                        <div className="weekly-img">
                          <img src="assets/img/news/weeklyNews3.jpg" alt="" />
                        </div>
                        <div className="weekly-caption">
                          <span className="color1">Strike</span>
                          <h4>
                            <a href="#" tabIndex={0}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="weekly-single slick-slide slick-active"
                        data-slick-index={3}
                        aria-hidden="false"
                        tabIndex={0}
                        role="tabpanel"
                        id="slick-slide03"
                        aria-describedby="slick-slide-control03"
                        style={{ width: 370 }}
                      >
                        <div className="weekly-img">
                          <img src="assets/img/news/weeklyNews1.jpg" alt="" />
                        </div>
                        <div className="weekly-caption">
                          <span className="color1">Strike</span>
                          <h4>
                            <a href="#" tabIndex={0}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="weekly-single slick-slide slick-cloned"
                        data-slick-index={4}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 370 }}
                      >
                        <div className="weekly-img">
                          <img src="assets/img/news/weeklyNews2.jpg" alt="" />
                        </div>
                        <div className="weekly-caption">
                          <span className="color1">Strike</span>
                          <h4>
                            <a href="#" tabIndex={-1}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="weekly-single active slick-slide slick-cloned"
                        data-slick-index={5}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 370 }}
                      >
                        <div className="weekly-img">
                          <img src="assets/img/news/weeklyNews1.jpg" alt="" />
                        </div>
                        <div className="weekly-caption">
                          <span className="color1">Strike</span>
                          <h4>
                            <a href="#" tabIndex={-1}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="weekly-single slick-slide slick-cloned"
                        data-slick-index={6}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 370 }}
                      >
                        <div className="weekly-img">
                          <img src="assets/img/news/weeklyNews3.jpg" alt="" />
                        </div>
                        <div className="weekly-caption">
                          <span className="color1">Strike</span>
                          <h4>
                            <a href="#" tabIndex={-1}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="weekly-single slick-slide slick-cloned"
                        data-slick-index={7}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 370 }}
                      >
                        <div className="weekly-img">
                          <img src="assets/img/news/weeklyNews1.jpg" alt="" />
                        </div>
                        <div className="weekly-caption">
                          <span className="color1">Strike</span>
                          <h4>
                            <a href="#" tabIndex={-1}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul
                    className="slick-dots"
                    style={{ display: "block" }}
                    role="tablist"
                  >
                    <li className="" role="presentation">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control00"
                        aria-controls="slick-slide00"
                        aria-label="1 of 2"
                        tabIndex={-1}
                      >
                        1
                      </button>
                    </li>
                    <li role="presentation" className="slick-active">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control01"
                        aria-controls="slick-slide01"
                        aria-label="2 of 2"
                        tabIndex={0}
                        aria-selected="true"
                      >
                        2
                      </button>
                    </li>
                    <li role="presentation" className="">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control02"
                        aria-controls="slick-slide02"
                        aria-label="3 of 2"
                        tabIndex={-1}
                      >
                        3
                      </button>
                    </li>
                    <li className="" role="presentation">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control03"
                        aria-controls="slick-slide03"
                        aria-label="4 of 2"
                        tabIndex={-1}
                      >
                        4
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Weekly-News */}
      {/* Whats New Start */}
      <section className="whats-news-area pt-50 pb-20">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row d-flex justify-content-between">
                <div className="col-lg-3 col-md-3">
                  <div className="section-tittle mb-30">
                    <h3>Whats New</h3>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9">
                  <div className="properties__button">
                    {/*Nav Button  */}
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a
                          className="nav-item nav-link active"
                          id="nav-home-tab"
                          data-toggle="tab"
                          href="#nav-home"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                        >
                          All
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="nav-profile-tab"
                          data-toggle="tab"
                          href="#nav-profile"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                        >
                          Lifestyle
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="nav-contact-tab"
                          data-toggle="tab"
                          href="#nav-contact"
                          role="tab"
                          aria-controls="nav-contact"
                          aria-selected="false"
                        >
                          Travel
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="nav-last-tab"
                          data-toggle="tab"
                          href="#nav-last"
                          role="tab"
                          aria-controls="nav-contact"
                          aria-selected="false"
                        >
                          Fashion
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="nav-Sports"
                          data-toggle="tab"
                          href="#nav-nav-Sport"
                          role="tab"
                          aria-controls="nav-contact"
                          aria-selected="false"
                        >
                          Sports
                        </a>
                        <a
                          className="nav-item nav-link"
                          id="nav-technology"
                          data-toggle="tab"
                          href="#nav-techno"
                          role="tab"
                          aria-controls="nav-contact"
                          aria-selected="false"
                        >
                          Technology
                        </a>
                      </div>
                    </nav>
                    {/*End Nav Button  */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  {/* Nav Card */}
                  <div className="tab-content" id="nav-tabContent">
                    {/* card one */}
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div className="whats-news-caption">
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews1.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews2.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews3.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews4.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card two */}
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <div className="whats-news-caption">
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews1.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews2.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews3.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews4.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Card three */}
                    <div
                      className="tab-pane fade"
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
                    >
                      <div className="whats-news-caption">
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews1.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews2.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews3.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews4.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* card fure */}
                    <div
                      className="tab-pane fade"
                      id="nav-last"
                      role="tabpanel"
                      aria-labelledby="nav-last-tab"
                    >
                      <div className="whats-news-caption">
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews1.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews2.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews3.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews4.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* card Five */}
                    <div
                      className="tab-pane fade"
                      id="nav-nav-Sport"
                      role="tabpanel"
                      aria-labelledby="nav-Sports"
                    >
                      <div className="whats-news-caption">
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews1.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews2.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews3.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews4.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* card Six */}
                    <div
                      className="tab-pane fade"
                      id="nav-techno"
                      role="tabpanel"
                      aria-labelledby="nav-technology"
                    >
                      <div className="whats-news-caption">
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews1.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews2.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews3.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="single-what-news mb-100">
                              <div className="what-img">
                                <img src="assets/img/news/whatNews4.jpg" alt="" />
                              </div>
                              <div className="what-cap">
                                <span className="color1">Night party</span>
                                <h4>
                                  <a href="#">
                                    Welcome To The Best Model Winner Contest
                                  </a>
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Nav Card */}
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              {/* Section Tittle */}
              <div className="section-tittle mb-40">
                <h3>Follow Us</h3>
              </div>
              {/* Flow Socail */}
              <div className="single-follow mb-45">
                <div className="single-box">
                  <div className="follow-us d-flex align-items-center">
                    <div className="follow-social">
                      <a href="#">
                        <img src="assets/img/news/icon-fb.png" alt="" />
                      </a>
                    </div>
                    <div className="follow-count">
                      <span>8,045</span>
                      <p>Fans</p>
                    </div>
                  </div>
                  <div className="follow-us d-flex align-items-center">
                    <div className="follow-social">
                      <a href="#">
                        <img src="assets/img/news/icon-tw.png" alt="" />
                      </a>
                    </div>
                    <div className="follow-count">
                      <span>8,045</span>
                      <p>Fans</p>
                    </div>
                  </div>
                  <div className="follow-us d-flex align-items-center">
                    <div className="follow-social">
                      <a href="#">
                        <img src="assets/img/news/icon-ins.png" alt="" />
                      </a>
                    </div>
                    <div className="follow-count">
                      <span>8,045</span>
                      <p>Fans</p>
                    </div>
                  </div>
                  <div className="follow-us d-flex align-items-center">
                    <div className="follow-social">
                      <a href="#">
                        <img src="assets/img/news/icon-yo.png" alt="" />
                      </a>
                    </div>
                    <div className="follow-count">
                      <span>8,045</span>
                      <p>Fans</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* New Poster */}
              <div className="news-poster d-none d-lg-block">
                <img src="assets/img/news/news_card.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Whats New End */}
      {/*   Weekly2-News start */}
      <div className="weekly2-news-area  weekly2-pading gray-bg">
        <div className="container">
          <div className="weekly2-wrapper">
            {/* section Tittle */}
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle mb-30">
                  <h3>Weekly Top News</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="weekly2-news-active dot-style d-flex dot-style slick-initialized slick-slider slick-dotted">
                  <div className="slick-list draggable">
                    <div
                      className="slick-track"
                      style={{
                        opacity: 1,
                        width: 4200,
                        transform: "translate3d(-1200px, 0px, 0px)"
                      }}
                    >
                      <div
                        className="weekly2-single slick-slide slick-cloned"
                        data-slick-index={-4}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 270 }}
                      >
                        <div className="weekly2-img">
                          <img src="assets/img/news/weekly2News2.jpg" alt="" />
                        </div>
                        <div className="weekly2-caption">
                          <span className="color1">Event night</span>
                          <p>25 Jan 2020</p>
                          <h4>
                            <a href="#" tabIndex={-1}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="weekly2-single slick-slide slick-cloned"
                        data-slick-index={-3}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 270 }}
                      >
                        <div className="weekly2-img">
                          <img src="assets/img/news/weekly2News3.jpg" alt="" />
                        </div>
                        <div className="weekly2-caption">
                          <span className="color1">Corporate</span>
                          <p>25 Jan 2020</p>
                          <h4>
                            <a href="#" tabIndex={-1}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="weekly2-single slick-slide slick-cloned"
                        data-slick-index={-2}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 270 }}
                      >
                        <div className="weekly2-img">
                          <img src="assets/img/news/weekly2News4.jpg" alt="" />
                        </div>
                        <div className="weekly2-caption">
                          <span className="color1">Event time</span>
                          <p>25 Jan 2020</p>
                          <h4>
                            <a href="#" tabIndex={-1}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="weekly2-single slick-slide slick-cloned"
                        data-slick-index={-1}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 270 }}
                      >
                        <div className="weekly2-img">
                          <img src="assets/img/news/weekly2News4.jpg" alt="" />
                        </div>
                        <div className="weekly2-caption">
                          <span className="color1">Corporate</span>
                          <p>25 Jan 2020</p>
                          <h4>
                            <a href="#" tabIndex={-1}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="weekly2-single slick-slide slick-current slick-active"
                        data-slick-index={0}
                        aria-hidden="false"
                        tabIndex={0}
                        role="tabpanel"
                        id="slick-slide10"
                        aria-describedby="slick-slide-control10"
                        style={{ width: 270 }}
                      >
                        <div className="weekly2-img">
                          <img src="assets/img/news/weekly2News1.jpg" alt="" />
                        </div>
                        <div className="weekly2-caption">
                          <span className="color1">Corporate</span>
                          <p>25 Jan 2020</p>
                          <h4>
                            <a href="#" tabIndex={0}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="weekly2-single slick-slide slick-active"
                        data-slick-index={1}
                        aria-hidden="false"
                        tabIndex={0}
                        role="tabpanel"
                        id="slick-slide11"
                        aria-describedby="slick-slide-control11"
                        style={{ width: 270 }}
                      >
                        <div className="weekly2-img">
                          <img src="assets/img/news/weekly2News2.jpg" alt="" />
                        </div>
                        <div className="weekly2-caption">
                          <span className="color1">Event night</span>
                          <p>25 Jan 2020</p>
                          <h4>
                            <a href="#" tabIndex={0}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="weekly2-single slick-slide slick-active"
                        data-slick-index={2}
                        aria-hidden="false"
                        tabIndex={0}
                        role="tabpanel"
                        id="slick-slide12"
                        aria-describedby="slick-slide-control12"
                        style={{ width: 270 }}
                      >
                        <div className="weekly2-img">
                          <img src="assets/img/news/weekly2News3.jpg" alt="" />
                        </div>
                        <div className="weekly2-caption">
                          <span className="color1">Corporate</span>
                          <p>25 Jan 2020</p>
                          <h4>
                            <a href="#" tabIndex={0}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="weekly2-single slick-slide slick-active"
                        data-slick-index={3}
                        aria-hidden="false"
                        tabIndex={0}
                        role="tabpanel"
                        id="slick-slide13"
                        aria-describedby="slick-slide-control13"
                        style={{ width: 270 }}
                      >
                        <div className="weekly2-img">
                          <img src="assets/img/news/weekly2News4.jpg" alt="" />
                        </div>
                        <div className="weekly2-caption">
                          <span className="color1">Event time</span>
                          <p>25 Jan 2020</p>
                          <h4>
                            <a href="#" tabIndex={0}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="weekly2-single slick-slide"
                        data-slick-index={4}
                        aria-hidden="true"
                        tabIndex={-1}
                        role="tabpanel"
                        id="slick-slide14"
                        aria-describedby="slick-slide-control14"
                        style={{ width: 270 }}
                      >
                        <div className="weekly2-img">
                          <img src="assets/img/news/weekly2News4.jpg" alt="" />
                        </div>
                        <div className="weekly2-caption">
                          <span className="color1">Corporate</span>
                          <p>25 Jan 2020</p>
                          <h4>
                            <a href="#" tabIndex={-1}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="weekly2-single slick-slide slick-cloned"
                        data-slick-index={5}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 270 }}
                      >
                        <div className="weekly2-img">
                          <img src="assets/img/news/weekly2News1.jpg" alt="" />
                        </div>
                        <div className="weekly2-caption">
                          <span className="color1">Corporate</span>
                          <p>25 Jan 2020</p>
                          <h4>
                            <a href="#" tabIndex={-1}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="weekly2-single slick-slide slick-cloned"
                        data-slick-index={6}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 270 }}
                      >
                        <div className="weekly2-img">
                          <img src="assets/img/news/weekly2News2.jpg" alt="" />
                        </div>
                        <div className="weekly2-caption">
                          <span className="color1">Event night</span>
                          <p>25 Jan 2020</p>
                          <h4>
                            <a href="#" tabIndex={-1}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="weekly2-single slick-slide slick-cloned"
                        data-slick-index={7}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 270 }}
                      >
                        <div className="weekly2-img">
                          <img src="assets/img/news/weekly2News3.jpg" alt="" />
                        </div>
                        <div className="weekly2-caption">
                          <span className="color1">Corporate</span>
                          <p>25 Jan 2020</p>
                          <h4>
                            <a href="#" tabIndex={-1}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="weekly2-single slick-slide slick-cloned"
                        data-slick-index={8}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 270 }}
                      >
                        <div className="weekly2-img">
                          <img src="assets/img/news/weekly2News4.jpg" alt="" />
                        </div>
                        <div className="weekly2-caption">
                          <span className="color1">Event time</span>
                          <p>25 Jan 2020</p>
                          <h4>
                            <a href="#" tabIndex={-1}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="weekly2-single slick-slide slick-cloned"
                        data-slick-index={9}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 270 }}
                      >
                        <div className="weekly2-img">
                          <img src="assets/img/news/weekly2News4.jpg" alt="" />
                        </div>
                        <div className="weekly2-caption">
                          <span className="color1">Corporate</span>
                          <p>25 Jan 2020</p>
                          <h4>
                            <a href="#" tabIndex={-1}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul
                    className="slick-dots"
                    style={{ display: "block" }}
                    role="tablist"
                  >
                    <li className="slick-active" role="presentation">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control10"
                        aria-controls="slick-slide10"
                        aria-label="1 of 2"
                        tabIndex={0}
                        aria-selected="true"
                      >
                        1
                      </button>
                    </li>
                    <li role="presentation" className="">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control11"
                        aria-controls="slick-slide11"
                        aria-label="2 of 2"
                        tabIndex={-1}
                      >
                        2
                      </button>
                    </li>
                    <li role="presentation" className="">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control12"
                        aria-controls="slick-slide12"
                        aria-label="3 of 2"
                        tabIndex={-1}
                      >
                        3
                      </button>
                    </li>
                    <li className="" role="presentation">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control13"
                        aria-controls="slick-slide13"
                        aria-label="4 of 2"
                        tabIndex={-1}
                      >
                        4
                      </button>
                    </li>
                    <li role="presentation" className="">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control14"
                        aria-controls="slick-slide14"
                        aria-label="5 of 2"
                        tabIndex={-1}
                      >
                        5
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Weekly-News */}
      {/* Start Youtube */}
      <div className="youtube-area video-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="video-items-active slick-initialized slick-slider">
                <div className="slick-list draggable">
                  <div className="slick-track" style={{ opacity: 1, width: 5850 }}>
                    <div
                      className="video-items text-center slick-slide slick-current slick-active"
                      data-slick-index={0}
                      aria-hidden="false"
                      tabIndex={0}
                      style={{
                        width: 1170,
                        position: "relative",
                        left: 0,
                        top: 0,
                        zIndex: 999,
                        opacity: 1
                      }}
                    >
                      <iframe
                        src="https://www.youtube.com/embed/CicQIuG8hBo"
                        frameBorder={0}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""
                      />
                    </div>
                    <div
                      className="video-items text-center slick-slide"
                      data-slick-index={1}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{
                        width: 1170,
                        position: "relative",
                        left: "-1170px",
                        top: 0,
                        zIndex: 998,
                        opacity: 0
                      }}
                    >
                      <iframe
                        src="https://www.youtube.com/embed/rIz00N40bag"
                        frameBorder={0}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""
                      />
                    </div>
                    <div
                      className="video-items text-center slick-slide"
                      data-slick-index={2}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{
                        width: 1170,
                        position: "relative",
                        left: "-2340px",
                        top: 0,
                        zIndex: 998,
                        opacity: 0
                      }}
                    >
                      <iframe
                        src="https://www.youtube.com/embed/CONfhrASy44"
                        frameBorder={0}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""
                      />
                    </div>
                    <div
                      className="video-items text-center slick-slide"
                      data-slick-index={3}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{
                        width: 1170,
                        position: "relative",
                        left: "-3510px",
                        top: 0,
                        zIndex: 998,
                        opacity: 0
                      }}
                    >
                      <iframe
                        src="https://www.youtube.com/embed/lq6fL2ROWf8"
                        frameBorder={0}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""
                      />
                    </div>
                    <div
                      className="video-items text-center slick-slide"
                      data-slick-index={4}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{
                        width: 1170,
                        position: "relative",
                        left: "-4680px",
                        top: 0,
                        zIndex: 998,
                        opacity: 0
                      }}
                    >
                      <iframe
                        src="https://www.youtube.com/embed/0VxlQlacWV4"
                        frameBorder={0}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="video-info">
            <div className="row">
              <div className="col-lg-6">
                <div className="video-caption">
                  <div className="top-caption">
                    <span className="color1">Politics</span>
                  </div>
                  <div className="bottom-caption">
                    <h2>
                      Welcome To The Best Model Winner Contest At Look of the year
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                      eiusmod ipsum dolor sit. Lorem ipsum dolor sit amet
                      consectetur adipisicing elit sed do eiusmod ipsum dolor sit.
                      Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                      eiusmod ipsum dolor sit lorem ipsum dolor sit.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="testmonial-nav text-center slick-initialized slick-slider">
                  <button
                    type="button"
                    className="slick-prev slick-arrow"
                    style={{ display: "block" }}
                  >
                    <span className="ti-arrow-left">{/*<span*/}</span>
                  </button>
                  <div className="slick-list draggable" style={{ padding: 0 }}>
                    <div
                      className="slick-track"
                      style={{
                        opacity: 1,
                        width: 2145,
                        transform: "translate3d(-429px, 0px, 0px)"
                      }}
                    >
                      <div
                        className="single-video slick-slide slick-cloned"
                        data-slick-index={-5}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 143 }}
                      >
                        <iframe
                          src="https://www.youtube.com/embed/CicQIuG8hBo"
                          frameBorder={0}
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen=""
                        />
                        <div className="video-intro">
                          <h4>Welcotme To The Best Model Winner Contest</h4>
                        </div>
                      </div>
                      <div
                        className="single-video slick-slide slick-cloned"
                        data-slick-index={-4}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 143 }}
                      >
                        <iframe
                          src="https://www.youtube.com/embed/rIz00N40bag"
                          frameBorder={0}
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen=""
                        />
                        <div className="video-intro">
                          <h4>Welcotme To The Best Model Winner Contest</h4>
                        </div>
                      </div>
                      <div
                        className="single-video slick-slide slick-cloned"
                        data-slick-index={-3}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 143 }}
                      >
                        <iframe
                          src="https://www.youtube.com/embed/CONfhrASy44"
                          frameBorder={0}
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen=""
                        />
                        <div className="video-intro">
                          <h4>Welcotme To The Best Model Winner Contest</h4>
                        </div>
                      </div>
                      <div
                        className="single-video slick-slide slick-cloned"
                        data-slick-index={-2}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 143 }}
                      >
                        <iframe
                          src="https://www.youtube.com/embed/lq6fL2ROWf8"
                          frameBorder={0}
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen=""
                        />
                        <div className="video-intro">
                          <h4>Welcotme To The Best Model Winner Contest</h4>
                        </div>
                      </div>
                      <div
                        className="single-video slick-slide slick-cloned slick-active"
                        data-slick-index={-1}
                        aria-hidden="false"
                        tabIndex={-1}
                        style={{ width: 143 }}
                      >
                        <iframe
                          src="https://www.youtube.com/embed/0VxlQlacWV4"
                          frameBorder={0}
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen=""
                        />
                        <div className="video-intro">
                          <h4>Welcotme To The Best Model Winner Contest</h4>
                        </div>
                      </div>
                      <div
                        className="single-video slick-slide slick-current slick-active slick-center"
                        data-slick-index={0}
                        aria-hidden="false"
                        tabIndex={0}
                        style={{ width: 143 }}
                      >
                        <iframe
                          src="https://www.youtube.com/embed/CicQIuG8hBo"
                          frameBorder={0}
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen=""
                        />
                        <div className="video-intro">
                          <h4>Welcotme To The Best Model Winner Contest</h4>
                        </div>
                      </div>
                      <div
                        className="single-video slick-slide slick-active"
                        data-slick-index={1}
                        aria-hidden="false"
                        tabIndex={0}
                        style={{ width: 143 }}
                      >
                        <iframe
                          src="https://www.youtube.com/embed/rIz00N40bag"
                          frameBorder={0}
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen=""
                        />
                        <div className="video-intro">
                          <h4>Welcotme To The Best Model Winner Contest</h4>
                        </div>
                      </div>
                      <div
                        className="single-video slick-slide slick-active"
                        data-slick-index={2}
                        aria-hidden="false"
                        tabIndex={0}
                        style={{ width: 143 }}
                      >
                        <iframe
                          src="https://www.youtube.com/embed/CONfhrASy44"
                          frameBorder={0}
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen=""
                        />
                        <div className="video-intro">
                          <h4>Welcotme To The Best Model Winner Contest</h4>
                        </div>
                      </div>
                      <div
                        className="single-video slick-slide"
                        data-slick-index={3}
                        aria-hidden="true"
                        tabIndex={0}
                        style={{ width: 143 }}
                      >
                        <iframe
                          src="https://www.youtube.com/embed/lq6fL2ROWf8"
                          frameBorder={0}
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen=""
                        />
                        <div className="video-intro">
                          <h4>Welcotme To The Best Model Winner Contest</h4>
                        </div>
                      </div>
                      <div
                        className="single-video slick-slide"
                        data-slick-index={4}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 143 }}
                      >
                        <iframe
                          src="https://www.youtube.com/embed/0VxlQlacWV4"
                          frameBorder={0}
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen=""
                        />
                        <div className="video-intro">
                          <h4>Welcotme To The Best Model Winner Contest</h4>
                        </div>
                      </div>
                      <div
                        className="single-video slick-slide slick-cloned slick-center"
                        data-slick-index={5}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 143 }}
                      >
                        <iframe
                          src="https://www.youtube.com/embed/CicQIuG8hBo"
                          frameBorder={0}
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen=""
                        />
                        <div className="video-intro">
                          <h4>Welcotme To The Best Model Winner Contest</h4>
                        </div>
                      </div>
                      <div
                        className="single-video slick-slide slick-cloned"
                        data-slick-index={6}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 143 }}
                      >
                        <iframe
                          src="https://www.youtube.com/embed/rIz00N40bag"
                          frameBorder={0}
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen=""
                        />
                        <div className="video-intro">
                          <h4>Welcotme To The Best Model Winner Contest</h4>
                        </div>
                      </div>
                      <div
                        className="single-video slick-slide slick-cloned"
                        data-slick-index={7}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 143 }}
                      >
                        <iframe
                          src="https://www.youtube.com/embed/CONfhrASy44"
                          frameBorder={0}
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen=""
                        />
                        <div className="video-intro">
                          <h4>Welcotme To The Best Model Winner Contest</h4>
                        </div>
                      </div>
                      <div
                        className="single-video slick-slide slick-cloned"
                        data-slick-index={8}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 143 }}
                      >
                        <iframe
                          src="https://www.youtube.com/embed/lq6fL2ROWf8"
                          frameBorder={0}
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen=""
                        />
                        <div className="video-intro">
                          <h4>Welcotme To The Best Model Winner Contest</h4>
                        </div>
                      </div>
                      <div
                        className="single-video slick-slide slick-cloned"
                        data-slick-index={9}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 143 }}
                      >
                        <iframe
                          src="https://www.youtube.com/embed/0VxlQlacWV4"
                          frameBorder={0}
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen=""
                        />
                        <div className="video-intro">
                          <h4>Welcotme To The Best Model Winner Contest</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="slick-next slick-arrow"
                    style={{ display: "block" }}
                  >
                    <span className="ti-arrow-right" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Start youtube */}
      {/*  Recent Articles start */}
      <div className="recent-articles">
        <div className="container">
          <div className="recent-wrapper">
            {/* section Tittle */}
            <div className="row">
              <div className="col-lg-12">
                <div className="section-tittle mb-30">
                  <h3>Recent Articles</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="recent-active dot-style d-flex dot-style slick-initialized slick-slider slick-dotted">
                  <div className="slick-list draggable">
                    <div
                      className="slick-track"
                      style={{
                        opacity: 1,
                        width: 4400,
                        transform: "translate3d(-1600px, 0px, 0px)"
                      }}
                    >
                      <div
                        className="single-recent mb-100 slick-slide slick-cloned"
                        data-slick-index={-3}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 370 }}
                      >
                        <div className="what-img">
                          <img src="assets/img/news/recent2.jpg" alt="" />
                        </div>
                        <div className="what-cap">
                          <span className="color1">Night party</span>
                          <h4>
                            <a href="#" tabIndex={-1}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="single-recent mb-100 slick-slide slick-cloned"
                        data-slick-index={-2}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 370 }}
                      >
                        <div className="what-img">
                          <img src="assets/img/news/recent3.jpg" alt="" />
                        </div>
                        <div className="what-cap">
                          <span className="color1">Night party</span>
                          <h4>
                            <a href="#" tabIndex={-1}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="single-recent mb-100 slick-slide slick-cloned"
                        data-slick-index={-1}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 370 }}
                      >
                        <div className="what-img">
                          <img src="assets/img/news/recent2.jpg" alt="" />
                        </div>
                        <div className="what-cap">
                          <span className="color1">Night party</span>
                          <h4>
                            <a href="#" tabIndex={-1}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="single-recent mb-100 slick-slide"
                        data-slick-index={0}
                        aria-hidden="true"
                        tabIndex={-1}
                        role="tabpanel"
                        id="slick-slide20"
                        aria-describedby="slick-slide-control20"
                        style={{ width: 370 }}
                      >
                        <div className="what-img">
                          <img src="assets/img/news/recent1.jpg" alt="" />
                        </div>
                        <div className="what-cap">
                          <span className="color1">Night party</span>
                          <h4>
                            <a href="#" tabIndex={-1}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="single-recent mb-100 slick-slide slick-current slick-active"
                        data-slick-index={1}
                        aria-hidden="false"
                        tabIndex={0}
                        role="tabpanel"
                        id="slick-slide21"
                        aria-describedby="slick-slide-control21"
                        style={{ width: 370 }}
                      >
                        <div className="what-img">
                          <img src="assets/img/news/recent2.jpg" alt="" />
                        </div>
                        <div className="what-cap">
                          <span className="color1">Night party</span>
                          <h4>
                            <a href="#" tabIndex={0}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="single-recent mb-100 slick-slide slick-active"
                        data-slick-index={2}
                        aria-hidden="false"
                        tabIndex={0}
                        role="tabpanel"
                        id="slick-slide22"
                        aria-describedby="slick-slide-control22"
                        style={{ width: 370 }}
                      >
                        <div className="what-img">
                          <img src="assets/img/news/recent3.jpg" alt="" />
                        </div>
                        <div className="what-cap">
                          <span className="color1">Night party</span>
                          <h4>
                            <a href="#" tabIndex={0}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="single-recent mb-100 slick-slide slick-active"
                        data-slick-index={3}
                        aria-hidden="false"
                        tabIndex={0}
                        role="tabpanel"
                        id="slick-slide23"
                        aria-describedby="slick-slide-control23"
                        style={{ width: 370 }}
                      >
                        <div className="what-img">
                          <img src="assets/img/news/recent2.jpg" alt="" />
                        </div>
                        <div className="what-cap">
                          <span className="color1">Night party</span>
                          <h4>
                            <a href="#" tabIndex={0}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="single-recent mb-100 slick-slide slick-cloned"
                        data-slick-index={4}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 370 }}
                      >
                        <div className="what-img">
                          <img src="assets/img/news/recent1.jpg" alt="" />
                        </div>
                        <div className="what-cap">
                          <span className="color1">Night party</span>
                          <h4>
                            <a href="#" tabIndex={-1}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="single-recent mb-100 slick-slide slick-cloned"
                        data-slick-index={5}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 370 }}
                      >
                        <div className="what-img">
                          <img src="assets/img/news/recent2.jpg" alt="" />
                        </div>
                        <div className="what-cap">
                          <span className="color1">Night party</span>
                          <h4>
                            <a href="#" tabIndex={-1}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="single-recent mb-100 slick-slide slick-cloned"
                        data-slick-index={6}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 370 }}
                      >
                        <div className="what-img">
                          <img src="assets/img/news/recent3.jpg" alt="" />
                        </div>
                        <div className="what-cap">
                          <span className="color1">Night party</span>
                          <h4>
                            <a href="#" tabIndex={-1}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className="single-recent mb-100 slick-slide slick-cloned"
                        data-slick-index={7}
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{ width: 370 }}
                      >
                        <div className="what-img">
                          <img src="assets/img/news/recent2.jpg" alt="" />
                        </div>
                        <div className="what-cap">
                          <span className="color1">Night party</span>
                          <h4>
                            <a href="#" tabIndex={-1}>
                              Welcome To The Best Model Winner Contest
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul
                    className="slick-dots"
                    style={{ display: "block" }}
                    role="tablist"
                  >
                    <li className="" role="presentation">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control20"
                        aria-controls="slick-slide20"
                        aria-label="1 of 2"
                        tabIndex={-1}
                      >
                        1
                      </button>
                    </li>
                    <li role="presentation" className="slick-active">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control21"
                        aria-controls="slick-slide21"
                        aria-label="2 of 2"
                        tabIndex={0}
                        aria-selected="true"
                      >
                        2
                      </button>
                    </li>
                    <li role="presentation" className="">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control22"
                        aria-controls="slick-slide22"
                        aria-label="3 of 2"
                        tabIndex={-1}
                      >
                        3
                      </button>
                    </li>
                    <li className="" role="presentation">
                      <button
                        type="button"
                        role="tab"
                        id="slick-slide-control23"
                        aria-controls="slick-slide23"
                        aria-label="4 of 2"
                        tabIndex={-1}
                      >
                        4
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Recent Articles End */}
      {/*Start pagination */}
      <div className="pagination-area pb-45 text-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="single-wrap d-flex justify-content-center">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-start">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <span className="flaticon-arrow roted" />
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        01
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        02
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        03
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        <span className="flaticon-arrow right-arrow" />
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End pagination  */}
    </>

  );
}

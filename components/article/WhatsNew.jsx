const WhatsNew = () => {
  return (
    <section className="whats-news-area pt-50 pb-20">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row d-flex justify-content-between">
              <div className="col-lg-2 col-md-3">
                <div className="section-tittle mb-30">
                  <h3>Whats New</h3>
                </div>
              </div>
              <div className="col-lg-10 col-md-9">
                <div className="properties__button">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <span
                        className="nav-item nav-link cursor-pointer active"
                      >
                        All
                      </span>
                      <a
                        className="nav-item nav-link cursor-pointer"
                      >
                        TECH
                      </a>
                      <a
                        className="nav-item nav-link cursor-pointer"
                      >
                        LEGAL
                      </a>
                      <a
                        className="nav-item nav-link cursor-pointer"
                      >
                        BOARDS
                      </a>
                    </div>
                  </nav>
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
                        <div className="col-lg-4 col-md-4">
                          <div className="single-what-news mb-100">
                            <div className="what-img">
                              <img
                                src="https://www.reuters.com/resizer/v2/INVGTSTEJVPUBJPQXDIRJ52G5I.jpg?auth=c77f9fe5c1f0f4fa792fb59887d495220e93fadd64dc5114e05d4ed871c47f74&width=480&quality=80"
                                alt=""
                              />
                            </div>
                            <div className="what-cap">
                              <span className="color1">
                                Artificial Intelligence
                              </span>
                              <h4>
                                <a href="/post_detail">
                                  Microsoft to delay release of Recall AI
                                  feature on security concerns
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <div className="single-what-news mb-100">
                            <div className="what-img">
                              <img
                                src="https://www.reuters.com/resizer/v2/STZKNTHATFIBRCGNDXS372CPZM.jpg?auth=a8a912353adf05054df47163860c332a3c53ba88379affecdc3c2372b15e4e44&width=480&quality=80"
                                alt=""
                              />
                            </div>
                            <div className="what-cap">
                              <span className="color1">Technology</span>
                              <h4>
                                <a href="/post_detail">
                                  GameStop postpones shareholder meet to June 17
                                  after technical difficulties
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <div className="single-what-news mb-100">
                            <div className="what-img">
                              <img
                                src="https://www.reuters.com/resizer/v2/XLV3XLLCPRKLDPVMWRQUB6G6IA.jpg?auth=ad5447574ca6c933947cb0367717ddf255beb84482068d61f393408ca55c1adc&width=480&quality=80"
                                alt=""
                              />
                            </div>
                            <div className="what-cap">
                              <span className="color1">Technology</span>
                              <h4>
                                <a href="/post_detail">
                                  Adobe raises full-year revenue forecast on
                                  robust software demand
                                </a>
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4">
                          <div className="single-what-news mb-100">
                            <div className="what-img">
                              <img
                                src="https://www.reuters.com/resizer/v2/J6YVDZW6EVKLTLKC43XUZYVLHY.jpg?auth=e282ffc771df7c17014ebeb05f84732eb1ee63f126034a0f5c34586c759f3fba&width=480&quality=80"
                                alt=""
                              />
                            </div>
                            <div className="what-cap">
                              <span className="color1">Night party</span>
                              <h4>
                                <a href="/post_detail">
                                  Roaring Kitty nearly doubles GameStop holdings
                                  to 9 million shares, Reddit post shows
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
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;

const Contact = () => {
  return (
    <main>
      {/* About US Start */}
      <div className="about-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {/* Trending Tittle */}
              <div className="about-right mb-90">
                <div className="section-tittle mb-30 pt-30">
                  <h3>Contact Us</h3>
                </div>
                <div className="about-prea">
                  <p className="about-pera1 mb-25">
                    Welcome to My Contact Page We are ready to listen and
                    support you. Please contact us so we can discuss and answer
                    any technology related questions.
                  </p>
                </div>
                <div className="section-tittle mb-30">
                  <h3>Contact Info</h3>
                </div>
                <div className="about-prea">
                  <p className="about-pera1 mb-25">
                    Address: FPT University, Khu Công Nghệ Cao Hòa Lạc, km 29, Đại lộ, Thăng Long, Hà Nội, Việt Nam. <br />
                    Phone Number: (+84) 123 456 789. <br />
                    Email: contact@fptutechforum.com.<br />
                    Business Hours: Monday - Friday: 8:00 am - 5:00 pm. <br />
                  </p>
                </div>
                <iframe
                  width="800"
                  height="400"
                  style={{ border: "0" }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10150.03304075602!2d105.52412832706754!3d21.01505107263696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abc60e7d3f19%3A0x2be9d7d0b5abcbf4!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBGUFQgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1719170990363!5m2!1svi!2s"
                  frameBorder="0"
                />
              </div>
            </div>
            <div className="col-lg-4">
              {/* Section Tittle */}
              <div className="section-tittle mb-40 mt-30">
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
            </div>
          </div>
        </div>
      </div>
      {/* About US End */}
    </main>
  );
};
export default Contact;

const Contact=()=>{
    return <main>
    {/* About US Start */}
    <div className="about-area">
      <div className="container">
        {/* Hot Aimated News Tittle*/}
        <div className="row">
          <div className="col-lg-12">
            <div className="trending-tittle">
              <strong>Trending now</strong>
              {/* <p>Rem ipsum dolor sit amet, consectetur adipisicing elit.</p> */}
              <div className="trending-animated">
                <div
                  id="ticker-wrapper-1718215623959"
                  className="ticker-wrapper has-js left"
                >
                  <div id="ticker-1718215623959" className="ticker">
                    <div id="ticker-title-1718215623959" className="ticker-title">
                      <span />
                    </div>
                    <p
                      id="ticker-content-1718215623959"
                      className="ticker-content"
                      style={{ display: "block", opacity: 1, left: 20 }}
                    >
                      Bangladesh dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div
                      id="ticker-swipe-1718215623959"
                      className="ticker-swipe"
                      style={{ left: 20, marginLeft: 388, display: "none" }}
                    >
                      <span style={{ display: "block" }}>{/* */}</span>
                    </div>
                  </div>
                  <ul
                    id="ticker-controls-1718215623959"
                    className="ticker-controls"
                  >
                    <li
                      id="play-pause-1718215623959"
                      className="jnt-play-pause controls"
                    >
                      <a href="">{/* */}</a>
                    </li>
                    <li id="prev-1718215623959" className="jnt-prev controls">
                      <a href="">{/* */}</a>
                    </li>
                    <li id="next-1718215623959" className="jnt-next controls">
                      <a href="">{/* */}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            {/* Trending Tittle */}
            <div className="about-right mb-90">
              <div className="about-img">
                <img src="assets/img/post/about_heor1.jpg" alt="" />
              </div>
              <div className="section-tittle mb-30 pt-30">
                <h3>About Us</h3>
              </div>
              <div className="about-prea">
                <p className="about-pera1 mb-25">
                Our team of passionate journalists is dedicated 
                to delivering accurate and compelling news stories 
                to our readers. With a commitment to integrity and 
                professionalism, we strive to keep our audience 
                informed about the latest developments in politics, 
                business, culture, and more. From investigative 
                reporting to feature articles, we cover a wide range 
                of topics to provide comprehensive coverage and analysis. 
                Our goal is to uphold the highest standards of journalism 
                and serve as a trusted source of information for our community.
                </p>
              
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
    </div>
    {/* About US End */}
  </main>
  
}
export default Contact
const SocialShare = ({ article }) => {
  return (
    <div className="social-share pt-30">
      <div className="section-tittle">
        <h3 className="mr-20">Share:</h3>
        <ul>
          <li>
            <a href="#">
              <img src="/assets/img/news/icon-ins.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/assets/img/news/icon-fb.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/assets/img/news/icon-tw.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="/assets/img/news/icon-yo.png" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SocialShare;

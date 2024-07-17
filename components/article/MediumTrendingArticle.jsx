import { limitContent } from "@/utils";

const MediumTrendingArticle = ({ article }) => {
  return (
    <div className="col-lg-4">
      <div className="single-bottom mb-35">
        <div className="trend-bottom-img mb-30">
          <img src={article.thumbnail} alt="" />
        </div>
        <div className="trend-bottom-cap">
          <span className="color1">{article?.category?.categoryName}</span>
          <h4>
            <a href={`/article/${article.slug}`}>{article.title}</a>
          </h4>
          <p>{limitContent(article.short_content, 10)}</p>
        </div>
      </div>
    </div>
  );
};

export default MediumTrendingArticle;

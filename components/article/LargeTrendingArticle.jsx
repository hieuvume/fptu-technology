import { limitContent } from "@/utils";

const LargeTrendingArticle = ({ article }) => {
  return (
    <div className="trending-top mb-30">
      <div className="trend-top-img">
        <img src={article.thumbnail} alt="Article Thumbnail" />
        <div className="trend-top-cap">
          <span>{article?.category?.categoryName}</span>
          <h2>
            <a href={`/article/${article.slug}`}>{article.title}</a>
          </h2>
          <p className="text-white">{limitContent(article.short_content, 30)}</p>
        </div>
      </div>
    </div>
  );
};

export default LargeTrendingArticle;

import { limitContent } from "@/utils";

const NewArticle = ({ article }) => {
  return (
    <div className="col-lg-4 col-md-4">
      <div className="single-what-news mb-100">
        <div className="what-img">
          <img src={article.thumbnail} alt={article.title} />
        </div>
        <div className="what-cap">
          <span className="color1">{article?.category?.categoryName}</span>
          <h4>
            <a href={`/article/${article.slug}`}>{article.title}</a>
          </h4>
          <p>{limitContent(article.short_content)}</p>
        </div>
      </div>
    </div>
  );
};

export default NewArticle;

import Link from "next/link";

const RelatedArticle = ({ article }) => {
  return (
    <div className="card mb-3">
      <img
        src={article.thumbnail}
        className="card-img-top"
        alt={article.title}
      />
      <div className="card-body">
        <Link
          href={`/article/${article.slug}`}
          className="card-title text-dark"
        >
          {article.title}
        </Link>
        <p className="card-text">{article.excerpt}</p>
        <Link href={`/article/${article.slug}`} className="btn btn-primary">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default RelatedArticle;

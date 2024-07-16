
  const SmallNewArticle = ({ article }) => {
    return (
      <div className="trand-right-single d-flex">
        <div className="trand-right-img">
          <img src={article.thumbnail} alt="" style={{ maxWidth: "150px" }} />
        </div>
        <div className="trand-right-cap">
          {/* <span className="color1">{article.category.categoryName}</span> */}
          <h4>
            <a href={`/article/${article.slug}`}>{article.title}</a>
          </h4>
          {/* <p>{limitContent(article.content)}</p> */}
        </div>
      </div>
    );
  };
  
  export default SmallNewArticle;
  
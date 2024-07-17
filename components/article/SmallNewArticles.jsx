import React from "react";

const SmallNewArticle = ({ article, isVisible }) => {
  const articleStyle = {
    marginBottom: "20px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
    transition: "transform 0.3s ease",
    display: isVisible ? "flex" : "none", 
    alignItems: "center"
  };

  const imageStyle = {
    maxWidth: "100%",
    height: "auto"
  };

  const categoryStyle = {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#999"
  };

  const titleStyle = {
    fontSize: "16px",
    margin: "5px 0",
    color: "#333",
    textDecoration: "none"
  };

  return (
    <div className="trand-right-single" style={articleStyle}>
      <div className="trand-right-img">
        <img src={article.thumbnail} alt="" style={imageStyle} />
      </div>
      <div className="trand-right-cap">
        <span style={categoryStyle}>{article.category.categoryName}</span>
        <h4>
          <a href={`/article/${article.slug}`} style={titleStyle}>{article.title}</a>
        </h4>
        {/* <p>{limitContent(article.content)}</p> */}
      </div>
    </div>
  );
};

export default SmallNewArticle;

'use client'
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import articlesApi from "@/api/articlesApi"; // Đảm bảo rằng bạn đã có API này

const SearchPage = () => {
    const searchParams = useSearchParams();
    const title = searchParams.get("title");
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 6;

    useEffect(() => {
        if (title) {
            const fetchArticles = async () => {
                try {
                    const response = await articlesApi.searchArticles(title);
                    setArticles(response);
                } catch (error) {
                    console.error("Lỗi khi lấy bài báo:", error);
                } finally {
                    setLoading(false);
                }
            };

            fetchArticles();
        } else {
            setLoading(false);
        }
    }, [title]);

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);
    const totalPages = Math.ceil(articles.length / articlesPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    if (loading) {
        return <p>Đang tải...</p>;
    }

    return (
        <div className="container">
            <h3>Kết quả tìm kiếm cho: "{title}"</h3>
            {currentArticles.length > 0 ? (
                <div className="article-list">
                    {currentArticles.map((article, index) => (
                        <div key={index} className="article-item">
                            <div className="article-thumbnail">
                                <img src={article.thumbnail} alt="Article Thumbnail" />
                            </div>
                            <div className="article-content">
                                <h4>
                                    <a href={`/article/${article.slug}`}>{article.title}</a>
                                </h4>
                            </div>
                        </div>
                    ))}
                    <div>
                        <div className="pagination">
                            <button onClick={handlePreviousPage} disabled={currentPage === 1}>Trang trước</button>
                            <span>Trang {currentPage} / {totalPages}</span>
                            <button onClick={handleNextPage} disabled={currentPage === totalPages}>Trang sau</button>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Không có kết quả nào được tìm thấy.</p>
            )}

            <style jsx>{`
        .container {
          padding: 20px;
        }
        .article-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .article-item {
          display: flex;
          border: 1px solid #ddd;
          border-radius: 10px;
          background-color: #f9f9f9;
        }
        .article-thumbnail {
          flex: 3;
          padding: 10px;
        }
        .article-thumbnail img {
          max-width: 100%;
          border-radius: 10px 0 0 10px;
        }
        .article-content {
          flex: 9;
          padding: 20px;
          display: flex;
          align-items: center;
        }
        .article-content h4 {
          margin: 0;
        }
        .article-content a {
          text-decoration: none;
          color: inherit;
        }
        .pagination {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
        }
        .pagination button {
          padding: 10px 20px;
          border: none;
          background-color: #0070f3;
          color: white;
          cursor: pointer;
          border-radius: 5px;
        }
        .pagination button:disabled {
          background-color: #cccccc;
          cursor: not-allowed;
        }
      `}</style>
        </div>
    );
};

export default SearchPage;

"use client"
import { useState, useEffect } from 'react';
import articlesApi from "@/api/articlesApi";
import Table from "@/components/table/Table";
import { TableProvider } from "@/provider/TableProvider";

const ArticlesPendingPage = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetchPendingArticles();
    }, []); // Chỉ gọi một lần khi component được mount

    const fetchPendingArticles = async () => {
        try {
            const pendingArticles = await articlesApi.getPendingArticles();
            setArticles(pendingArticles);
        } catch (error) {
            console.error("Error fetching pending articles:", error);
        }
    };

    const handlePublishedArticle = async (article) => {
        try {
            const updatedArticle = await articlesApi.approveArticle(article);
            if (updatedArticle) {
                alert('Article has been published!');
                fetchPendingArticles(); // Cập nhật lại danh sách bài viết sau khi phê duyệt thành công
            } else {
                alert('Failed to publish article!');
            }
        } catch (error) {
            console.error("Error publishing article:", error);
            alert('Failed to publish article!');
        }
    };

    const columns = [
        {
            Header: 'Title',
            accessor: 'title',
        },
        {
            Header: 'Content',
            accessor: 'content',
            Cell: ({ value }) => value.length > 50 ? value.slice(0, 50) + '...' : value,
        },
        {
            Header: 'Category',
            accessor: 'category',
            Cell: ({ value }) => value ? value.categoryName : '',
        },
        {
            Header: 'published',
            accessor: 'published',
            Cell: ({ value }) => value ? 'True' : 'False',
        },
        {
            Header: 'Publication Date',
            accessor: 'publicationDate',
            Cell: ({ value }) => new Date(value).toLocaleString('vi-VN'),
        },
        {
            Header: 'Action',
            id: 'action',
            Cell: ({ row }) => (
                <div className="d-flex">
                    <button className="btn btn-sm btn-warning" onClick={() => handlePublishedArticle(row.original)}>Published</button>
                </div>
            ),
        }
    ];

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center">
                <a href="/dashboard/articles" className="btn btn-secondary btn-sm">Back to Articles List</a>
            </div>
            <h3 className='text-center'>Pending Articles</h3>
            {articles.length > 0 ?
                <TableProvider columns={columns} tableKey="articles" fetcher={articlesApi.getPendingArticles}>
                    <Table />
                </TableProvider>
                :
                <div className="text-center">No pending articles found.</div>
            }
        </div>
    );
}

export default ArticlesPendingPage;

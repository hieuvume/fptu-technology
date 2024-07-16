'use client';
import articlesApi from "@/api/articlesApi";
import { PaginationTable } from "@/provider/PaginationTable";
import { getArticleColor } from "@/utils";

const columns = [
  {
    name: 'Title',
    selector: 'title',
  },
  {
    name: 'Content',
    selector: 'content',
    cell: (row) => row.content.length > 50 ? row.content.slice(0, 50) + '...' : row.content,
  },
  {
    name: 'Category',
    selector: 'category.categoryName',
    cell: (row) => row.category.categoryName,
  },
  {
    name: 'Author',
    selector: 'author.fullName',
    cell: (row) => row.author.fullName,
  },
  {
    name: 'Publication Date',
    selector: 'publicationDate',
    sortable: true,
    cell: (row) => new Date(row.publicationDate).toLocaleString('vi-VN'),
  },
  {
    name: 'Status',
    selector: 'status',
    sortable: true,
    cell: (row) => <span className={`text-${getArticleColor(row.status)}`} style={{ fontWeight: 'bold' }}>{row?.status?.toUpperCase()}</span>,
  },
  {
    name: 'Action',
    cell: (row) => (
      <div className="d-flex">
        <a href={`/dashboard/articles/${row._id}`} className="btn btn-sm btn-warning">Edit</a>
      </div>
    ),
  }
];

const ArticlesPage = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h3>
          Articles
        </h3>
        <a href="/dashboard/articles/create" className="btn btn-primary btn-sm">Create</a>
      </div>
      <PaginationTable columns={columns} tableKey="articles" fetcher={() => articlesApi.getManageArticles()} />
    </div>
  );
}

export default ArticlesPage;
'use client';
import articlesApi from "@/api/articlesApi";
import Table from "@/components/table/Table";
import { TableProvider } from "@/provider/TableProvider";

const columns = [
  {
    Header: 'ID',
    accessor: '_id',
  },
  {
    Header: 'Title',
    accessor: 'title',
  },
  {
    Header: 'Content',
    accessor: 'content',
  },
  {
    Header: 'Category',
    accessor: 'category_id', 
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
        <a href={`/dashboard/articles/${row.original._id}`} className="btn btn-sm btn-warning">Edit</a>
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
      <TableProvider columns={columns} tableKey="articles" fetcher={() => articlesApi.getAll()}>
        <Table />
      </TableProvider>
    </div>
  );
}

export default ArticlesPage;

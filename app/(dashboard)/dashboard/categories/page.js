'use client'
import categoryApi from "@/api/categoryApi";
import DeleteRecordCell from "@/components/DeleteRecordCell";
import Table from "@/components/table/Table";
import { TableProvider } from "@/provider/TableProvider";

const columns = [
  {
    Header: 'ID',
    accessor: '_id',
  },
  {
    Header: 'Category Name',
    accessor: 'categoryName',
  },
  {
    Header: 'Description',
    accessor: 'description',
  },
  {
    Header: 'Date Created',
    accessor: 'dateCreated',
    Cell: ({ value }) => new Date(value).toLocaleString('vi-VN'),
  },
  {
    Header: 'Action',
    id: 'action',
    Cell: ({ row }) => (
      <div className="d-flex">
        <a href={`/dashboard/categories/${row.original._id}`} className="btn btn-sm">Edit</a>
        <DeleteRecordCell onDelete={() => categoryApi.delete(row.original._id)} />
      </div>
    ),
  }
];

const CategoriesPage = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h3>
          Categories
        </h3>
        <a href="/dashboard/categories/create" className="btn btn-primary btn-sm">Create</a>
      </div>
      <TableProvider columns={columns} tableKey="categories" fetcher={() => categoryApi.getAll()}>
        <Table />
      </TableProvider>
    </div>
  );
}

export default CategoriesPage;
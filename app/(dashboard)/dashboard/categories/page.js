'use client'
import categoryApi from "@/api/categoryApi";
import { PaginationTable } from "@/provider/PaginationTable";

const columns = [
  {
    name: 'ID',
    selector: '_id',
  },
  {
    name: 'Category Name',
    selector: 'categoryName',
  },
  {
    name: 'Description',
    selector: 'description',
  },
  {
    name: 'Date Created',
    selector: 'dateCreated',
    sortable: true,
    cell: (row) => new Date(row.dateCreated).toLocaleString('vi-VN'),
  },
  {
    name: 'Action',
    cell: (row) => (
      <div className="d-flex">
        <a href={`/dashboard/categories/${row._id}`} className="btn btn-sm">Edit</a>
        {/* <DeleteRecordCell onDelete={() => categoryApi.delete(row._id)} /> */}
      </div>
    ),
  }
]

const CategoriesPage = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h3>
          Categories
        </h3>
        <a href="/dashboard/categories/create" className="btn btn-primary btn-sm">Create</a>
      </div>
      {/* <TableProvider columns={columns} tableKey="categories" fetcher={() => categoryApi.getAll()}>
        <Table />
      </TableProvider> */}
      <PaginationTable columns={columns} tableKey="categories" fetcher={() => categoryApi.getAll()} />
    </div>
  );
}

export default CategoriesPage;
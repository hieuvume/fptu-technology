'use client'
import userApi from "@/api/userApi";
import Table from "@/components/table/Table";
import { TableProvider } from "@/provider/TableProvider";

const columns = [
  {
    Header: 'ID',
    accessor: '_id',
  },
  {
    Header: 'Full Name',
    accessor: 'fullName',
  },
  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'Date of Birth',
    accessor: 'dateOfBirth',
    Cell: ({ value }) => new Date(value).toLocaleDateString('vi-VN'),
  },
  {
    Header: 'Role',
    accessor: 'role',
  },
  {
    Header: 'Date Registered',
    accessor: 'dateRegistered',
    Cell: ({ value }) => new Date(value).toLocaleString('vi-VN'),
  },
  {
    Header: 'Action',
    id: 'action',
    Cell: ({ row }) => (
      <div className="d-flex">
        <a href={`/dashboard/users/${row.original._id}`} className="btn btn-sm btn-warning">Edit</a>
      </div>
    ),
  }
];

const UsersPage = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h3>
          Users
        </h3>
        <a href="/dashboard/users/create" className="btn btn-primary btn-sm">Create</a>
      </div>
      <TableProvider columns={columns} tableKey="users" fetcher={() => userApi.getAll()}>
        <Table />
      </TableProvider>
    </div>
  );
}

export default UsersPage;
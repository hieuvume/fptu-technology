'use client';
import userApi from "@/api/userApi";
import { PaginationTable } from "@/provider/PaginationTable";

const columns = [
  {
    name: 'Full Name',
    selector: 'fullName',
  },
  {
    name: 'Email',
    selector: 'email',
  },
  {
    name: 'Date of Birth',
    selector: 'dateOfBirth',
    cell: (row) => row.dateOfBirth ? new Date(row.dateOfBirth).toLocaleDateString('vi-VN') : '',
  },
  {
    name: 'Role',
    selector: 'role',
  },
  {
    name: 'Date Registered',
    selector: 'dateRegistered',
    cell: (row) => row.dateRegistered ? new Date(row.dateRegistered).toLocaleString('vi-VN') : '',
  },
  {
    name: 'Action',
    cell: (row) => (
      <div className="d-flex">
        <a href={`/dashboard/users/${row._id}`} className="btn btn-sm btn-warning">Edit</a>
      </div>
    ),
  }
]

const UsersPage = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h3>
          Users
        </h3>
        <a href="/dashboard/users/create" className="btn btn-primary btn-sm">Create</a>
      </div>
      <PaginationTable columns={columns} tableKey="users" fetcher={() => userApi.getAll()} />
    </div>
  );
}

export default UsersPage;
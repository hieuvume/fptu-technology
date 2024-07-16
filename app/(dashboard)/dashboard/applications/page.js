'use client';
import applicationApi from "@/api/applicationApi";
import { PaginationTable } from "@/provider/PaginationTable";

const columns = [
  {
    name: 'User',
    selector: 'user_id',
    cell: row => row.user_id ? row.user_id.fullName : '',
  },
  {
    name: 'Specialty',
    selector: 'specialty',
  },
  {
    name: 'Experience',
    selector: 'experience',
    cell: row => `${row.experience} year(s)`,
  },
  {
    name: 'Example',
    selector: 'example',
  },
  {
    name: 'Description',
    selector: 'description',
    cell: row => row.description.length > 50 ? row.description.slice(0, 50) + '...' : row.description,
  },
  {
    name: 'Social links',
    selector: 'social_links',
  },
  {
    name: 'Status',
    selector: 'status',
    sortable: true,
    cell: row => <span className={`text-${row.status == 'rejected' ? 'danger' : row.status == 'pending' ? 'warning' : 'success'}`} style={{ fontWeight: 'bold' }}>{row.status.toUpperCase()}</span>,
  },
  {
    name: 'Created At',
    selector: 'created_at',
    sortable: true,
    cell: row => new Date(row.created_at).toLocaleString('vi-VN'),
  },
  {
    name: 'Action',
    cell: row => (
      <div className="d-flex">
        <a href={`/dashboard/applications/${row._id}`} className="btn btn-sm btn-warning">View</a>
      </div>
    ),
  }
]

const ApplicationsPage = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h3>
          Applications
        </h3>
      </div>
      <PaginationTable columns={columns} tableKey="applications" fetcher={() => applicationApi.getAll()} />
    </div>
  );
}

export default ApplicationsPage;

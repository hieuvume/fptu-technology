'use client';
import applicationApi from "@/api/applicationApi";
import articlesApi from "@/api/articlesApi";
import Table from "@/components/table/Table";
import { TableProvider } from "@/provider/TableProvider";

const columns = [
  {
    Header: 'User',
    accessor: 'user_id',
    Cell: ({ value }) => value ? value.fullName : '',
  },
  {
    Header: 'Specialty',
    accessor: 'specialty',
  },
  {
    Header: 'Experience',
    accessor: 'experience',
    Cell: ({ value }) => `${value} year(s)`,
  },
  {
    Header: 'Example',
    accessor: 'example',
  },
  {
    Header: 'Description',
    accessor: 'description',
    Cell: ({ value }) => value.length > 50 ? value.slice(0, 50) + '...' : value,
  },
  {
    Header: 'Social links',
    accessor: 'social_links',
  },
  {
    Header: 'Status',
    accessor: 'status',
    Cell: ({ value }) => <span className={`text-${value == 'rejected' ? 'danger' : value == 'pending' ? 'warning' : 'success'}`} style={{ fontWeight: 'bold' }}>{value.toUpperCase()}</span>,
  },
  {
    Header: 'Created At',
    accessor: 'created_at',
    Cell: ({ value }) => new Date(value).toLocaleString('vi-VN'),
  },
  {
    Header: 'Action',
    id: 'action',
    Cell: ({ row }) => (
      <div className="d-flex">
        <a href={`/dashboard/applications/${row.original._id}`} className="btn btn-sm btn-warning">View</a>
      </div>
    ),
  }
];

const ApplicationsPage = () => {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h3>
          Applications
        </h3>
      </div>
      <TableProvider columns={columns} tableKey="applications" fetcher={() => applicationApi.getAll()}>
        <Table />
      </TableProvider>
    </div>
  );
}

export default ApplicationsPage;

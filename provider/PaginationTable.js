import React, { createContext, useMemo } from 'react';
import DataTable from 'react-data-table-component-with-filter';
import useSWR from 'swr';

const TableContext = createContext();

export const PaginationTable = ({ columns, tableKey, fetcher, filter, defaultSortId }) => {

  const { data, error, mutate } = useSWR(tableKey, fetcher);

  const filtered = useMemo(() => {
    if (filter) {
      const filtered = data.filter((item) => {
        return Object.keys(item).some((key) => {
          return String(item[key]).toLowerCase().includes(filter.toLowerCase());
        })
      })
      return filtered
    } else {
      return data
    }
  }, [data, filter]);

  return (
    <TableContext.Provider value={{ data, error, mutate }}>
      <DataTable
        className="table table-striped"
        columns={columns}
        data={filtered}
        defaultSortFieldId={defaultSortId}
        defaultSortAsc={false}
        paginationRowsPerPageOptions={[10, 50, 100, 500, 1000]}
        pagination
        responsive={true}
      ></DataTable>
    </TableContext.Provider>
  );
};


export const useTableContext = () => {
  return useContext(TableContext);
};

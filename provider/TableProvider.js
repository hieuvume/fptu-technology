import React, { createContext, useContext, useMemo } from 'react';
import { useTable } from 'react-table';
import useSWR from 'swr';

const TableContext = createContext();

export const TableProvider = ({ columns, tableKey, fetcher, children }) => {

  const { data, error, mutate } = useSWR(tableKey, fetcher);

  const tableInstance = useTable({
    columns,
    data: data || [],
  });

  const contextValue = useMemo(() => ({
    ...tableInstance,
    isLoading: !error && !data,
    isError: error,
    mutate,
  }), [tableInstance, data, error]);

  return (
    <TableContext.Provider value={contextValue}>
      {children}
    </TableContext.Provider>
  );

};

export const useTableContext = () => {
  return useContext(TableContext);
};

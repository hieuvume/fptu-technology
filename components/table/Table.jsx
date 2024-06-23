import { useTableContext } from "@/provider/TableProvider";
import React from "react";

const Table = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    isLoading,
    isError,
  } = useTableContext();

  return (
    <div className="mt-2">
      <table
        {...getTableProps()}
        className="table table-bordered table-striped"
      >
        <thead className="thead-dark">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {isLoading && (
            <tr>
              <td
                colSpan={headerGroups[0].headers.length}
                className="text-center"
              >
                Loading...
              </td>
            </tr>
          )}
          {isError && (
            <tr>
              <td
                colSpan={headerGroups[0].headers.length}
                className="text-center"
              >
                Failed to load data
              </td>
            </tr>
          )}
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

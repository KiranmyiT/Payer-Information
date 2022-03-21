import { React, useMemo, useEffect } from "react";
import { useTable, useFilters, useSortBy, usePagination } from "react-table";
import { StyledTable, Pagination } from "../../Styling/Table-styling";
import { useSelector, useDispatch } from "react-redux";
import { loadPayers } from "../../../redux/actions";
import { PropTypes } from "prop-types";

function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter },
}) {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  );
}

const Table = (props) => {
  let dispatch = useDispatch();
  const { payers } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(loadPayers());
  }, []);

  if (props.tableType === "active") {
    var customFilters = [
      {
        id: "isActive",
        value: true,
      },
    ];
  } else if (props.tableType === "inactive") {
    customFilters = [
      {
        id: "isActive",
        value: false,
      },
    ];
  } else {
    customFilters = [{}];
  }

  const data = useMemo(() => payers);

  const columns = useMemo(() => props.COLUMNS, []);

  const filterTypes = useMemo(
    () => ({
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const defaultColumn = useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const tableInstance = useTable(
    {
      columns,
      data,
      useFilters,
      defaultColumn,
      filterTypes,
      useSortBy,
      usePagination,
      initialState: { pageIndex: 0, filters: customFilters },
    },
    useFilters,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    // headerGroup,
    prepareRow,
    pageOptions,
    page,
    state: { pageIndex },
    gotoPage,
    previousPage,
    pageCount,
    nextPage,
  } = tableInstance;

  return (
    // apply the table props
    <div>
      <StyledTable {...getTableProps()}>
        <thead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup, i) => (
              // Apply the header row props
              <tr key={i} {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column, j) => (
                    // Apply the header cell props
                    <th
                      key={j}
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {
                        // Render the header
                        column.render("Header")
                      }

                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " ▼"
                            : " ▲"
                          : ""}
                      </span>
                      {/* <div>{column}</div> */}
                      {(column.render("Header") === "Trading Partner ID" ||
                        column.render("Header") === "Transaction Types" ||
                        column.render("Header") === "Status") && (
                        <div>
                          {column.canFilter ? column.render("Filter") : null}
                        </div>
                      )}
                    </th>
                  ))
                }
              </tr>
            ))
          }
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            page.map((row, k) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <tr key={k} {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell, l) => {
                      // Apply the cell props
                      return (
                        <td key={l} {...cell.getCellProps()}>
                          {
                            // Render the cell contents
                            cell.render("Cell")
                          }
                        </td>
                      );
                    })
                  }
                </tr>
              );
            })
          }
        </tbody>
      </StyledTable>
      <Pagination className="pagination">
        <button
          onClick={() => gotoPage(0)}
          // disabled={!canPreviousPage}
        >
          {"<<"}
        </button>{" "}
        <button
          onClick={() => previousPage()}
          // disabled={!canPreviousPage}
        >
          {"<"}
        </button>{" "}
        <span>
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <button
          onClick={() => nextPage()}
          // disabled={!canNextPage}
        >
          {">"}
        </button>{" "}
        <button
          onClick={() => gotoPage(pageCount - 1)}
          // disabled={!canNextPage}
        >
          {">>"}
        </button>{" "}
      </Pagination>
    </div>
  );
};

Table.propTypes = {
  tableType: PropTypes.string,
  COLUMNS: PropTypes.array,
};

DefaultColumnFilter.propTypes = {
  column: PropTypes.object,
};

export default Table;

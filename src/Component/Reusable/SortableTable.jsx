// SortableTable.js
import React from "react";
import { useTable, useSortBy } from "react-table";
import { Table, Thead, Tbody, Tr, Th, Td, Box, Icon } from "@chakra-ui/react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

const SortableTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Age",
        accessor: "age",
      },
      {
        Header: "Address",
        accessor: "address.city",
      },
      {
        Header: "Country",
        accessor: "address.country",
      }
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <Box marginTop="60px" marginBottom="30px" marginLeft="30px" marginRight="30px">
      <Box marginBottom="30px">
        <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>General Information </span>
      </Box>
      <Table
        {...getTableProps()}
        variant="striped"
        colorScheme="teal"
        width="100%"
        p={25}
      >
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  borderBottom="1px"
                  borderColor="gray.200"
                  py="2"
                  px="3"
                  textAlign="left"
                >
                  {column.render("Header")}
                  <Box display="inline-block" marginLeft="5px">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <Icon as={AiOutlineArrowDown} />
                      ) : (
                        <Icon as={AiOutlineArrowUp} />
                      )
                    ) : null}
                  </Box>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td
                    {...cell.getCellProps()}
                    borderBottom="1px"
                    borderColor="gray.100"
                    py="2"
                    px="3"
                  >
                    {cell.render("Cell")}
                  </Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </Box>
  );
};

export default SortableTable;

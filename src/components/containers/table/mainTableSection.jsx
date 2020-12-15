import React, { useState, useEffect, useContext } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
// import { UtilityContext } from "../../../contexts/index.js";
import * as CSS from "../../pages/PostList/styles/postList.style.js";
import { dataTable } from "../../../constants/mockData.js";
import { isEmptyArray, getSubString } from "../../../utilities/index.js";

import TablePaginationActions from "./TablePaginationActions.jsx";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const buttonStyle = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const useStyles2 = makeStyles({
  table: {
    minWidth: 700,
  },
});

const createData = ([title, description, age]) => {
  return { title, description, age };
};

const mapDataRows = (data) => {
  let rows = [];

  if (!isEmptyArray(data)) {
    // array does exist, is an array, or is not empty
    // ⇒ attempt to process array
    data.forEach((value, index) => {
      rows.push(
        createData([
          getSubString(value.title, 0, 20),
          getSubString(value.description, 0, 40),
          <section>
            <Button variant="contained" color="secondary">
              <DeleteIcon />
            </Button>
          </section>,
        ])
      );
    });
  }

  return rows;
};

function MainTableSection__({ title, data, tableHeader, ...props }) {
  // const { history, location, breakPoint } = useContext(UtilityContext);
  const buttonClasses = buttonStyle();

  const classes = useStyles2();

  const [dataRows, setDataRows] = useState(mapDataRows(data));

  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));

    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, dataRows.length - page * rowsPerPage);

  return (
    <section>
      <Typography variant="h4" style={CSS.main().title}>
        {title}
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="custom pagination table">
          <TableHead>
            <TableRow>
              <StyledTableCell>{tableHeader[0]}</StyledTableCell>
              <StyledTableCell align="left">{tableHeader[1]}</StyledTableCell>
              <StyledTableCell align="center">{tableHeader[2]}</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? dataRows.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : dataRows
            ).map((row) => (
              <TableRow key={row.title}>
                <TableCell scope="row">{row.title}</TableCell>
                <TableCell style={{ width: "50%" }} align="left">
                  {row.description}
                </TableCell>
                <TableCell style={{ width: 160 }} align="center">
                  {row.age}
                </TableCell>
              </TableRow>
            ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                colSpan={3}
                count={dataRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </section>
  );
}

export default MainTableSection__;

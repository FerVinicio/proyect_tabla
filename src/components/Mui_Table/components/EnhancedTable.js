import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import {EnhancedTableHead} from './EnhancedTableHead';
import {EnhancedTableToolbar} from './EnhancedTableToolbar';
import { StyledTableRow } from '../elements';
import { ContextTable } from '../context/ContextTable';
import {FilterRow} from './FilterRow';
import {getComparator, stableSort} from '../utils/utils'

/*******************************************/
/******* Tabla de exportación     **********/
/*******************************************/

export default function EnhancedTable() {
  
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const {dataColumnsFilter, dataRowsFilter, tableTitle} = React.useContext(ContextTable);
  console.log('Cargando la tabla y sus columnas');
  //console.log(dataColumnsFilter);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = dataRowsFilter.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty dataRowsFilter.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - dataRowsFilter.length) : 0;

  console.log('Creando tabla ->>>>>>');

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        {console.log('Llamada a encabezados')}
        <EnhancedTableToolbar 
            numSelected={selected.length}
            tableTitle = {tableTitle} 
        />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              dataColumns={dataColumnsFilter}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={dataRowsFilter.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 dataRowsFilter.slice().sort(getComparator(order, orderBy)) */}

              <FilterRow dataColumns={dataColumnsFilter}/>
              {stableSort(dataRowsFilter, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  //const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <StyledTableRow
                      hover
                      //onClick={(event) => handleClick(event, row.id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      {/*  <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          checked={isItemSelected}
                          inputProps={{
                            'aria-labelledby': labelId,
                          }}
                        />
                      </TableCell> */}

                      {
                        Object.keys(row).map((key, index) => {
                            //console.log('Key: ' + key)
                            if (key !== 'id') {
                              return (
                                <TableCell align = {dataColumnsFilter[index].align ? dataColumnsFilter[index].align : "left"} key={key}>
                                    {row[key]}
                                </TableCell>
                              )
                            }
                        })
                      }
                    </StyledTableRow>
                  );
                })}
              {emptyRows > 0 && (
                <StyledTableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                    backgroundColor:'#ffffff',
                  }}
                >
                  <TableCell colSpan={6} />
                </StyledTableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={dataRowsFilter.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          //labelRowsPerPage = 'Filas por página'
        />
      </Paper>
      <FormControlLabel
        style={{ paddingLeft: 6 }}
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label = {dense ? "Desactivar alta densidad" : "Activar alta densidad"}
      />
    </Box>
  );
}


import { useContext } from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import Parser from 'html-react-parser';

import { alpha } from '@mui/material/styles';
import { FaFileExcel, FaFilePdf } from 'react-icons/fa'
import {CgSearch} from 'react-icons/cg';
import {ContextTable} from '../context/ContextTable'

import {ContenedorBotones, ActionButton} from '../elements'
import { createColumnToExport, createRowsToExport, executeRequestToExport, getColumnFilters } from '../utils/utilsExport';

export const EnhancedTableToolbar = ({ numSelected, selection, tableTitle, exportButtons, searchButton }) => {

  console.log('Entrando a encabezados');
  const {dataColumnsFilter, dataRowsFilter, propsToExport} = useContext(ContextTable);
  // console.log(dataColumnsFilter);
  
  const handleToExport = (type) => {
    const columnsToExport = dataColumnsFilter.map((column) => createColumnToExport(column) )
    const rowsToExport = createRowsToExport(dataRowsFilter);
    console.log('Datos de exportación: ');
    // console.log(propsToExport);
    //const filters = getColumnFilters(dataColumns, tableRef?.current?.state.columns)
    executeRequestToExport(columnsToExport, rowsToExport, type, propsToExport);
  }
  //const columnsToExpor = headCells.map( CreateColumnToExport );
  // console.log(JSON.stringify(columnsToExpor));

    console.log('Creando encabezados');

    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...(selection && numSelected > 0 && {
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
          }),
        }}
      >
        {selection && numSelected > 0 ? (
          <Typography
            sx={{ flex: '1 1 100%' }}
            color="inherit"
            variant="subtitle1"
            component="div"
          >
            {numSelected} selected
          </Typography>
        ) : (
          <Typography
            sx={{ flex: '1 1 100%' }}
            variant="h5"
            id="tableTitle"
            component="div"
          >
            {Parser(tableTitle)}
          </Typography>
        )}
  
        {selection && numSelected > 0 ? (
          <Tooltip title="Borrar">
            <IconButton>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <ContenedorBotones>
            {searchButton && 
                <Tooltip title="Buscar">
                  <ActionButton>{<CgSearch color='blue' />}</ActionButton>
                </Tooltip>
            }        
            {exportButtons && 
              <>
                <Tooltip title="Exportar a PDF">
                  <ActionButton href='#!' onClick={(e)=>handleToExport('pdf')} >{<FaFilePdf color='red' />}</ActionButton>
                </Tooltip>
                <Tooltip title="Exporta a Excel">
                  <ActionButton href='#!' onClick={(e)=>handleToExport('xlsx')} >{<FaFileExcel color='green' />}</ActionButton>
                </Tooltip>
              </>
            }
          </ContenedorBotones>
        )}
      </Toolbar>
    );
  };
  
  EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number,
    selection: PropTypes.bool,
    tableTitle: PropTypes.string,
    exportButtons: PropTypes.bool,
    searchButton: PropTypes.bool,
  };

  EnhancedTableToolbar.defaultProps = {
    numSelected: 0,
    selection: true,
    tableTitle: 'Tabla de resultados',
    exportButtons: true,
    searchButton: false ,
  }
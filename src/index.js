import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Contenedor from './components/Mui_Table/elements/Contenedor';
import MuiTable from './components/Mui_Table/components/Mui_Table';
import {headCells, getSnrFederalColumns} from './columnsDef'
import {getDessert, getSNRFederal} from './api/apiRowsData';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { esES } from '@mui/material/locale';

  const theme = createTheme(
    {
      palette: {
        primary: { main: '#1976d2' },
      },
    },
    esES,
  );

  const propsToExport = {
    exportFileName : 'Archivo',
    exportSheetName : 'Datos',
    exportTitle : 'Reaction',
    subTitle : 'Sin selección',
    filters : 'Sin filtros',
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <Contenedor>
       <MuiTable headCells={headCells} rowData={getDessert} propsToExport={propsToExport} />
    </Contenedor>
    <br/>
    <Contenedor>
       <MuiTable headCells={getSnrFederalColumns} 
                 rowData={getSNRFederal} 
                 tableTitle = "Sistema <b>Representantes</b>"
                 propsToExport={propsToExport} 
        />
    </Contenedor>
    <Contenedor>
       <MuiTable headCells={getSnrFederalColumns} 
        />
    </Contenedor>    
  </ThemeProvider>
);


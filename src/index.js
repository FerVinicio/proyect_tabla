import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Contenedor from './components/Mui_Table/elements/Contenedor';
import MuiTable from './components/Mui_Table/components/Mui_Table';
import { CreateColumn } from './components/Mui_Table/utils/utils';

import {rows} from './api/apiRowsData';

const headCells = [
    /*           field         type,   disablePadding,   title                 */
    CreateColumn('name'     ,'string'   ,false         ,'Dessert (100g serving)'),
    CreateColumn('calories' ,'number'   ,false        ,'Calories'),
    CreateColumn('fat'      ,'number'   ,false        ,'Fat (g)'),
    CreateColumn('carbs'    ,'number'   ,false        ,'Carbs (g)'),
    CreateColumn('protein'  ,'number'   ,false        ,'Proteina (g)'),
  ];

  const propsToExport = {
    exportFileName : 'Archivo',
    exportSheetName : 'Datos',
    exportTitle : 'Reaction',
    subTitle : 'Sin selección',
    filters : 'Sin filtros',
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Contenedor>
       <MuiTable headCells={headCells} rowData={rows} propsToExport={propsToExport} />
    </Contenedor>
  </React.StrictMode>
);


import React, { createContext, useState } from 'react'

const ContextTable = createContext();

const ProviderTable = ({children}) => {

  const [dataColumns, setDataColumns] = useState([]);
  const [dataRows, setDataRows] = useState([]);

  const [dataColumnsFilter, setDataColumnsFilter] = useState(dataColumns);
  const [dataRowsFilter, setDataRowsFilter] = useState(dataRows);

  const [filterColumns, setFilterColumns] = useState(new Map());

  const [propsToExport, setPropToExport] = useState({});

  const onChangeDataColumns = ( newDataColumns ) => {
      setDataColumns([...newDataColumns]);
      setDataColumnsFilter([...newDataColumns]);
  }

  const onChangeDataRows = ( newDataRows ) => {
    setDataRows([...newDataRows]);
    setDataRowsFilter([...newDataRows]);
  }

  const onChangePropsToExport = (props) => {
    setPropToExport(props);
    //console.log('Propiedades para exportación');
    //console.log(props);
  } 

  const onAddFilterColumns = ( key, value ) => {
    // console.log('Agregando columna filtrada (antes)');
    // console.log(filterColumns);
    setFilterColumns(filterColumns.set(key, value.toLowerCase()));
    // console.log('Agregando columna filtrada (después)');
    // console.log(filterColumns);
    createRowsFilter();
  }

  const onRemoveFilterColumns = ( key ) => {
    // console.log('Eliminando columna filtrada (antes)');
    // console.log(filterColumns);
    if (filterColumns.delete(key)) {
      setFilterColumns(filterColumns);
      createRowsFilter();
    }
    // console.log('Eliminando columna filtrada (antes)');
    // console.log(filterColumns);
  }

  function createRowsFilter() {
    // console.log("creando la lista filtrada")
    // Filtrado de registros por las columnas filtradas
    if (filterColumns.size !== 0) {
      let filterRows = dataRows;

      filterColumns.forEach((value, key)=>{
        // console.log('Busqueda por: ' + key + '=' + value);
        let filtrados = filterRows.filter((row) => {
          let val = typeof row[key] !== 'string' ?  row[key].toString() : row[key].toLowerCase() ;
          return val.includes(value)
        })
        // console.log(filtrados);
        filterRows = filtrados;
      });
      setDataRowsFilter(filterRows);
    } else 
      setDataRowsFilter(dataRows);
    // Filtrado de registros por búsqueda general
  }

  return (
    <ContextTable.Provider value={{dataColumnsFilter, dataRowsFilter, propsToExport, createRowsFilter, onChangeDataColumns, 
                                   onChangeDataRows, onAddFilterColumns, onRemoveFilterColumns, onChangePropsToExport}}
    >
        {children}
    </ContextTable.Provider>
  )
}

export {ContextTable, ProviderTable};

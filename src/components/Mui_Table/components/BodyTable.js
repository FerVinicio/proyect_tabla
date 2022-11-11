import { useEffect, useContext } from 'react';
import { ContextTable } from '../context/ContextTable';
import {ContenedorTabla} from '../elements'
import EnhancedTable from "./EnhancedTable";

const BodyTable = ({ headCells, rowData, propsToExport }) => {

    const {onChangeDataColumns, onChangeDataRows, onChangePropsToExport} = useContext(ContextTable);

    useEffect(() => {
        console.log('Asignando las propiedades al Contexto');
        onChangeDataColumns(headCells);
        onChangeDataRows(rowData);
        //console.log(propsToExport);
        if (propsToExport) onChangePropsToExport(propsToExport);
    }, [])
    
    return ( 
        <ContenedorTabla>
            <EnhancedTable />
        </ContenedorTabla>
     );
}
 
export default BodyTable;
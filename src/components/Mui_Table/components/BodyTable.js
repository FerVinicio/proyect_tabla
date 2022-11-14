import { useEffect, useContext } from 'react';
import { ContextTable } from '../context/ContextTable';
import {ContenedorTabla} from '../elements'
import { CreateIDForData } from '../utils/utils';
import EnhancedTable from "./EnhancedTable";

const BodyTable = ({ headCells, rowData, propsToExport, tableTitle }) => {

    const {onChangeDataColumns, onChangeDataRows, onChangePropsToExport, setTableTitle} = useContext(ContextTable);

    useEffect(() => {
        console.log('Asignando las propiedades al Contexto');
        onChangeDataColumns(headCells);
        onChangeDataRows(CreateIDForData(rowData));

        //console.log(propsToExport);
        if (propsToExport) onChangePropsToExport(propsToExport);
        if (tableTitle) setTableTitle(tableTitle);

    }, [])
    
    return ( 
        <ContenedorTabla>
            <EnhancedTable />
        </ContenedorTabla>
     );
}
 
export default BodyTable;
import { ProviderTable } from '../context/ContextTable';
import BodyTable from './BodyTable';

const MuiTable = ({headCells, rowData, propsToExport, tableTitle}) => {

    console.log(propsToExport);
    
    return ( 
        <ProviderTable>
          <BodyTable headCells={headCells} 
                    rowData={rowData} 
                    propsToExport={propsToExport}
                    tableTitle = {tableTitle} />
        </ProviderTable>
     ); 
}
 
export default MuiTable;
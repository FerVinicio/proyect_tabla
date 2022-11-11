import { ProviderTable } from '../context/ContextTable';
import BodyTable from './BodyTable';

const MuiTable = ({headCells, rowData, propsToExport}) => {

    console.log(propsToExport);
    
    return ( 
      <ProviderTable>
        <BodyTable headCells={headCells} rowData={rowData} propsToExport={propsToExport} />
      </ProviderTable>
     ); 
}
 
export default MuiTable;
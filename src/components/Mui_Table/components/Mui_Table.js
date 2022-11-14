import PropTypes from 'prop-types';
import { ProviderTable } from '../context/ContextTable';
import BodyTable from './BodyTable';

const MuiTable = ({headCells, rowData, propsToExport, tableTitle, showDensity}) => {

    //console.log(propsToExport);
    return ( 
        <ProviderTable>
          <BodyTable headCells={headCells} 
                     rowData={rowData} 
                     propsToExport={propsToExport}
                     tableTitle = {tableTitle} 
                     showDensity = {showDensity}
          />
        </ProviderTable>
     ); 
}

MuiTable.propTypes = {
  headCells: PropTypes.array.isRequired,
  rowData: PropTypes.array,
  propsToExport: PropTypes.object,
  tableTitle: PropTypes.string,
  showDensity: PropTypes.bool
};

MuiTable.defaultProps = {
  rowData: [],
  showDensity: false,
}
 
export default MuiTable;
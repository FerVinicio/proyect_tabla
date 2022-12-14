const { v4: uuidv4 } = require('uuid');

export function CreateColumn(field, type, disablePadding, title) {
    return {
        field,
        type,
        disablePadding,
        title,
        numeric : (type === 'string' || type === 'date') ? false : true,
        align:     type === 'string' ? 'left' : type === 'date' ? 'center' : 'right',
    };
  }

export function CreateIDForData( arrData = [] ) {
   const newData = arrData.map( row => {
      return {...row, id:  uuidv4()}
   } )
   // console.log('Nueva array con IDs')
   // console.log(newData);
   return newData;
}

export function CreateColumnToExport({title, type, align}) {
    return {
        title,
        type,
        align,
    };
  } 

export const getProperties = ( array ) => {
const rows = array.map((row) => {
        const values = Object.values(row).toString().replace(',[object Object]', '');
        return {rowData : values};
    });
return rows;
}

export function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

export function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
export function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });

/*   const cols = stabilizedThis.map((el) => el[0])
              .map((row, index) => {

              });
  console.log('Sort method');
  console.log(cols); */

  return stabilizedThis.map((el) => el[0]);
}

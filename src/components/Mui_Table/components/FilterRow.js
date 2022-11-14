import { TableCell, TableRow } from "@mui/material";
import FilterField from "./FilterField";

const FilterRow = ({dataColumns}) => {

  // console.log('Llaves de filtros');
  //console.log(cols);

  return (
    <TableRow sx={{ border: 0 }}>
        {dataColumns.map((headCell) => (
        <TableCell
            sx={{ paddingY: 0 , paddingX: 1.5, borderBottomWidth: 0}}
            //sx={{ '& .MuiTableCell-root' : {BorderBottom : 0 }}}
            key={headCell.field}
            // padding={headCell.disablePadding ? 'none' : 'normal'}
            //padding= 'none'
        >
            <FilterField id={headCell.field}  label={headCell.title}></FilterField>
        </TableCell>
        ))}
    </TableRow> 
  )
}

export {FilterRow}

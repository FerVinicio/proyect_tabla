import { BorderBottom } from "@mui/icons-material";
import { TableCell, TableRow } from "@mui/material";
import FilterField from "./FilterField";
import { styled } from '@mui/material/styles';

const FilterRow = ({dataColumns}) => {

  const cols = dataColumns.map( col => col.field);
  console.log('Llaves de filtros');
  console.log(cols);

  const TableCellStyled = styled(TableCell) ({
    '& .MuiTableCell-root' : {
      BorderBottom : 0,
    },
  });

  return (
    <TableRow id='FILTROS' sx={{ border: 0 }}>
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

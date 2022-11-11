import { TableCell, TableRow } from "@mui/material";
import FilterField from "./FilterField";

const FilterRow = ({dataColumns}) => {
  return (
    <TableRow sx={{ border: 0 }}>
        {dataColumns.map((headCell) => (
        <TableCell
            key={headCell.field}
            padding={headCell.disablePadding ? 'none' : 'normal'}
        >
            <FilterField id={headCell.field}  label={headCell.title}></FilterField>
        </TableCell>
        ))}
    </TableRow> 
  )
}

export {FilterRow}

import PropTypes from 'prop-types';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import { visuallyHidden } from '@mui/utils';

export const EnhancedTableHead = ({ dataColumns, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, selection, sorting }) => {

    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    const selectAllCheckbox = selection && 
                                <TableCell 
                                  sx={{ borderBottomWidth: 0}}
                                  //sx={{ paddingY: 0 , paddingX: 1.5, borderBottomWidth: 0}}
                                  padding="checkbox"
                                  borderBottom='0'
                                  >
                                  <Checkbox
                                    color="primary"
                                    indeterminate={numSelected > 0 && numSelected < rowCount}
                                    checked={rowCount > 0 && numSelected === rowCount}
                                    onChange={onSelectAllClick}
                                    inputProps={{
                                      'aria-label': 'select all desserts',
                                    }}
                                  />
                              </TableCell>

    return (
      <TableHead>
        <TableRow>
          {selection === 'true'}
          {/* {selectAllCheckbox} */}
          {dataColumns.map((headCell) => (
            <TableCell
              sx={{ paddingY: 1 , paddingX: 1.5, borderBottomWidth: 0}}
              key={headCell.field}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.field ? order : false}
            >
              {sorting ? 
                <TableSortLabel
                  active={orderBy === headCell.field}
                  direction={orderBy === headCell.field ? order : 'asc'}
                  onClick={createSortHandler(headCell.field)}
                >
                  {headCell.title}
                  {orderBy === headCell.field ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </Box>
                  ) : null}
                </TableSortLabel>
              : 
                <>{headCell.title}</>
              }
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }
  
  EnhancedTableHead.propTypes = {
    dataColumns: PropTypes.array.isRequired,
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
    selection: PropTypes.bool,
  };
  
  EnhancedTableHead.defaultProps = {
    selection: true,
    sorting: true,
  }
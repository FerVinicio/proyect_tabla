import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {Box, InputAdornment, TextField } from '@mui/material';
import { ContextTable } from '../context/ContextTable';

const FilterField = ({id, label}) => {

  const {onAddFilterColumns, onRemoveFilterColumns} = React.useContext(ContextTable);
  const [searchText, setSearchText] = React.useState('');
  const idFilter = id;

  const onInputText = ((e) => {
    const text = e.target.value;
    setSearchText(text);
    if (text)
      onAddFilterColumns(idFilter, text)
    else
      onRemoveFilterColumns(idFilter)
  })


  return (
/*     <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: auto }}
    > */
    <Box sx={{ '& > :not(style)': { m: 0, border: 0 } }}>
      <TextField
        id={id}
        label=''
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ fontSize : '1rem' }} />
            </InputAdornment>
          ),
        }}
        variant="standard"
        value = {searchText}
        onChange = {onInputText}
      />
    </Box>
  );
}

export default FilterField;
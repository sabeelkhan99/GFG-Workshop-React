import React from 'react';
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';

const SearchBar = () => {
  return (
      <Box width="60%" sx={{my:'2rem'}}>
          <TextField fullWidth sx={{background:'white', borderRadius:'0.8rem',  outline:'none', border:'none'}} placeholder='Search for products, clothing and latest items'/>
    </Box>
  )
}

export default SearchBar
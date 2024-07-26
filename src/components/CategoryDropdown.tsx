import React from 'react';
import { MenuItem, Select, FormControl, InputLabel, OutlinedInput, Button, Box } from '@mui/material';
import { useStore } from '../context/StoreContext';
import useFetch from '../hooks/useFetch';


const CategoryDropdown: React.FC = () => {
  const { category, setCategory, clearFilters } = useStore();
  const { data: categories, loading, error } = useFetch('https://fakestoreapi.com/products/categories');

  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Box display="flex" alignItems="center" gap={2} width="100%">
      <FormControl sx={{ flexGrow: 1 }}>
        <InputLabel>Category</InputLabel>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value as string)}
          input={<OutlinedInput label="Category" />}
          sx={{
            width: '100%', 
            '& .MuiSelect-select': {
              paddingLeft: '10px', 
            },
            '& .MuiOutlinedInput-notchedOutline': {
              border: '1px solid lightgrey',
            },
          }}
        >
          {categories?.map((cat: string) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button onClick={clearFilters} variant="outlined" style={{ color: 'white', width: '10px', height: '40px', backgroundColor: 'blue', borderColor: 'lightblue' }}>
        X
      </Button>
    </Box>
  );
};

export default CategoryDropdown;

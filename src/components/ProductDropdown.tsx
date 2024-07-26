import React from 'react';
import { MenuItem, Select, FormControl, InputLabel, OutlinedInput, Box, Button } from '@mui/material';
import { useStore } from '../context/StoreContext';
import useFetch from '../hooks/useFetch';

const ProductDropdown: React.FC = () => {
  const { category, product, setProduct, clearFilters } = useStore();
  const { data: products, loading, error } = useFetch( category ? `https://fakestoreapi.com/products/category/${category}` : '');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Box display="flex" alignItems="center" gap={2} width="100%">
    <FormControl fullWidth>
      <InputLabel>Products</InputLabel>
      { <Select
        value={product}
        onChange={(e) => setProduct(e.target.value as string)}
        input={<OutlinedInput label="Product" />}
        sx={{
          
          '& .MuiInputLabel-shrink': {
            top: '-8px', 
          },
        }}
         disabled={!category} 
      >
        {category && products?.map((prod: { id: number; title: string }) => (
          <MenuItem key={prod.id} value={prod.id}>
            {prod.title}
          </MenuItem>
        ))}
      </Select>}
      
    </FormControl>
    <Button onClick={() => setProduct('')} variant="outlined" style={{ color: 'white', backgroundColor: 'blue', width: '10px', height: '40px', borderColor: 'lightblue' }}>
    X
  </Button>
  </Box>
  );
};

export default ProductDropdown;

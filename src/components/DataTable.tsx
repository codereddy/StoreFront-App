import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useStore } from '../context/StoreContext';
import useFetch from '../hooks/useFetch';
import { TableDescriptionCell } from '../styles';

const DataTable: React.FC = () => {
  const { category } = useStore();
  const { data: products, loading, error } = useFetch(`https://fakestoreapi.com/products/category/${category}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="left" style={{paddingLeft: '10px'}}>Description</TableCell>
            <TableCell align="right">Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.map((prod: { id: number; title: string; price: number; description: string; rating: { rate: number } }) => (
            <TableRow key={prod.id}>
              <TableCell style={{whiteSpace: 'nowrap', overflow: 'hidden', maxWidth: '200px', textOverflow:'ellipsis'}}>{prod.title}</TableCell>
              <TableCell align="right">${prod.price}</TableCell>
              <TableCell align="right" style={{whiteSpace: 'nowrap', overflow: 'hidden', maxWidth: '200px', textOverflow:'ellipsis'}}>${prod.description}</TableCell>
              <TableCell align="right">{prod.rating.rate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;

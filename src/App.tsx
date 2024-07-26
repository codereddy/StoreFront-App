import React, { useEffect } from 'react';
import {  Button, Box, Typography, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { StoreProvider, useStore } from './context/StoreContext';
import CategoryDropdown from './components/CategoryDropdown';
import ProductDropdown from './components/ProductDropdown';
import BarChart from './components/BarChart';
import ProductDetails from './components/ProductDetails';
import DataTable from './components/DataTable';
import { MainContainer, ContentContainer, DropdownsContainer, DataContainer, ChartAndTableContainer, Header, ChartContainer, ChartDetail } from './styles';


const ChartViewSwitcher: React.FC = () => {
  const { chartView, setChartView } = useStore();

  const handleChange = (event: SelectChangeEvent<"Price" | "Rating">) => {
    setChartView(event.target.value as "Price" | "Rating");
  };

  return (
    <Box>
      <Typography variant="h6">
        <ChartDetail>{chartView} Comparison</ChartDetail>
      </Typography>
      <FormControl variant="outlined" style={{ minWidth: 'auto', padding: '5px' }}>
        <InputLabel id="chart-view-label">View</InputLabel>
        <Select
          labelId="chart-view-label"
          id="chart-view-select"
          value={chartView}
          size='small'
          style= {{width: 'auto'}}  
          onChange={handleChange}
          label="View"
        >
          <MenuItem value="Price">Price</MenuItem>
          <MenuItem value="Rating">Rating</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

const App: React.FC = () => {
  const { category, product, setProduct } = useStore();

  useEffect(() => {
    setProduct('');
  }, [category, setProduct]);

  return (
    <MainContainer>
      
      <Typography variant="h4">
      <Header>
        My Fabulous Store
        </Header>
      </Typography>
     
      <ContentContainer>
        <DropdownsContainer>
          <CategoryDropdown />
           <ProductDropdown />
        </DropdownsContainer>
        { !category ? <h2 style={{  paddingLeft: '300px'}}>Please select a category</h2> : 
        <DataContainer>
          {category && !product && (
            <ChartAndTableContainer>
              
              <ChartContainer>
              <ChartViewSwitcher />
                <BarChart />
              </ChartContainer>
              <DataTable />
            </ChartAndTableContainer>
          )}
          {product && <ProductDetails />}
        </DataContainer>
}
      </ContentContainer>
    </MainContainer>
  );
};

const Root: React.FC = () => (
  <StoreProvider>
    <App />
  </StoreProvider>
);

export default Root;

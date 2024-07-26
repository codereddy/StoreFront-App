import styled from 'styled-components';
import { Box, TableCell } from '@mui/material';

// Container for the main layout
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;  
`;

// Container for dropdowns and chart/table
export const ContentContainer = styled.div`
  display: flex;
  gap: 20px;
  border-box  
`;

//Header
export const Header = styled(Box)`
  background-color: #373b36;
  color: white;
  width: 100%;
  text-align: center;
  font-weight: bold;
  height: 70px;
  padding-top: 20px;
  margin-bottom: 20px;
`;

// Container for dropdowns
export const DropdownsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  padding: 20px;
  max-width: 500px;
`;

// Container Selected Data
export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 2;
  padding-right: 30px;
`;

// Styling for the chart and table container
export const ChartAndTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

// Container for Chart
export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid lightgrey;
  border-radius: 5px;
  height: 400px;
`;

//Image Container
export const ProductImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

//Product Details Container
export const ProductDetailsContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 100px; 
`;

//Price Details Container
export const PriceDetail = styled.span`
  padding-top: 10px;
  font-size: 30px;
`;

//Chart Details
export const ChartDetail = styled.span`
  align-items: center;
  padding-left: 350px;
`;

//Styling for wrapping description
export const TableDescriptionCell = styled(TableCell)`
white-space: nowrap;
overflow: hidden;
max-width: 200px;
text-align: left;
border: 10px solid transparent
padding: 8px; 
`;


//Styling to capitalize content
export const CapitalizedText = styled.span`
  text-transform: uppercase;
`;

//Styling to Bold a text 
export const BoldText = styled.span`
  font-weight: bold;
`;
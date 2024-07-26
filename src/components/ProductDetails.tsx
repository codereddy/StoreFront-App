import React from 'react';
import { useStore } from '../context/StoreContext';
import useFetch from '../hooks/useFetch';
import { Card, CardContent, Typography,CardMedia,Box } from '@mui/material';
import { CapitalizedText, BoldText, ProductImageContainer, ProductDetailsContainer, PriceDetail} from '../styles';



const ProductDetails: React.FC = () => {
  const { product } = useStore();
  const { data: productDetails, loading, error } = useFetch(`https://fakestoreapi.com/products/${product}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Card>
       
      <CardContent>
        <Typography variant="h5"><BoldText>{productDetails?.title}</BoldText></Typography>
        <ProductDetailsContainer>
          
          <Box>
            
        <Typography><CapitalizedText>{productDetails?.category}</CapitalizedText></Typography>
            <Typography>SKU: {productDetails?.id}</Typography>
            <Typography paddingTop={3}><PriceDetail>${productDetails?.price}</PriceDetail></Typography>
          </Box>
          <ProductImageContainer>
            <CardMedia
              component="img"
              image={productDetails?.image}
              alt={productDetails?.title}
              style={{ height: '100px', width: 'auto' }} 
            />
          </ProductImageContainer>
        </ProductDetailsContainer>

        <Typography>{productDetails?.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;

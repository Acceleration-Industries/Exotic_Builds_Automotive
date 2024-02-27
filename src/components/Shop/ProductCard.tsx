// ProductCard.tsx
interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    imageUrl: string;
  }
  import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
// Product interface
interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <Card raised sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardMedia
        component="img"
        height="140"
        image={product.imageUrl}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="h6" component="div">
          {product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
export { ProductCard };

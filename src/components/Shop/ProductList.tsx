// ProductList.tsx
import { Grid } from '@mui/material';
import { ProductCard } from './ProductCard';
const products = [
  { id: 1, name: 'Lamborghini Huracan', description: 'A great product', price: '$278,998.00', imageUrl: 'src/assets/images/black_huracan.png' },
  { id: 2, name: 'Ferrari 488', description: 'Another great product', price: '$279,999.99', imageUrl: 'src/assets/images/ferrari_488.jpg' },
];
export const ProductList = () => {
  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

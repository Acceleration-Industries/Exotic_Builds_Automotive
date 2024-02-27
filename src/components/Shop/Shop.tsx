// Shop/Shop.tsx
import { Box, Typography } from '@mui/material';
import { ProductList } from './ProductList';

export const Shop = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: '20px',
        backgroundImage: 'url(src/assets/images/texture_honeycomb_black.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100%',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Welcome to Our Shop
      </Typography>
      <ProductList />
    </Box>
  );
};

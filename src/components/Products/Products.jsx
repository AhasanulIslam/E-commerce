import React from "react";
import Product from "./Product";
import {Grid} from '@mui/material'
// import Product from './Product'
const products = [
  { id: 1, name: "Shoes", description: "Running shoes.", price: "$5" },
  { id: 2, name: "Macbook", description: "Apple macbook.", price: "$10" },
];

const Products = () => {
  return (
    <>
      <Grid container justify="center" spacing={4}>
          <Product products={products} />
      </Grid>
    </>
  );
};

export default Products;

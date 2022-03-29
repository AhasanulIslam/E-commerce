import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
// import { AddShoppingCart } from "@material-ui/icons";
import { Grid } from "@mui/material";

const Product = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <Grid key={product.id}>
          <Card>
            <CardContent>
              <div>
                <Typography variant="h5" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="h5">{product.price}</Typography>
              </div>
              <Typography variant="h2" color="textSecondary">
                {" "}
                {product.description}{" "}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="Add to Cart">
                {/* <AddShoppingCart /> */}
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default Product;

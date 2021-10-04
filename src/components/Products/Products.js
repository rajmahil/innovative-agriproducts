import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product/Product";
import useStyles from "./styles";
import { Typography } from "@material-ui/core";

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content} id="shopSection">
      <Typography
        variant="h2"
        className={classes.sectionHeading}
        style={{ marginBottom: "0", textAlign: "center" }}
      >
        Our Products
      </Typography>
      <Typography
        variant="p"
        style={{ marginBottom: "24px", maxWidth: "800px", textAlign: "center" }}
        className={classes.sectionParagraph}
      >
        Orders are currently available for pickup by appointment at NO: 30665
        Haight Road (RGE Road 3044), Corman Park, SK. Select your pick up time
        during checkout!
      </Typography>
      <Grid
        container
        justify="center"
        spacing={3}
        style={{ maxWidth: "1290px" }}
      >
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={4}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

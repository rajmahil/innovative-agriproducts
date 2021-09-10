import React, { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import { HiShoppingCart } from "react-icons/hi";

import useStyles from "./styles";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => onAddToCart(product.id, quantity);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.media.source}
        title={product.name}
      />
      <CardContent className={classes.productWrap}>
        <div className={classes.cardContent}>
          <Typography
            className={classes.productName}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {product.name}
          </Typography>
          <Typography
            className={classes.productPrice}
            gutterBottom
            variant="h5"
            component="h2"
          >
            ${product.price.formatted} /lb
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body"
          color="textSecondary"
          component="p"
          paragraph
          style={{ marginTop: "-15px" }}
          className={classes.productDescription}
        />
      </CardContent>
      <div className={classes.cardActions}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {quantity <= 1 ? (
            <Button
              disabled
              className={classes.quantityBtn}
              type="button"
              onClick={() => setQuantity(quantity - 1)}
            >
              -
            </Button>
          ) : (
            <Button
              className={classes.quantityBtn}
              type="button"
              onClick={() => setQuantity(quantity - 1)}
            >
              -
            </Button>
          )}
          <Typography className={classes.quantityNum}>
            &nbsp;{quantity}&nbsp;
          </Typography>
          <Button
            className={classes.quantityBtn}
            type="button"
            onClick={() => setQuantity(quantity + 1)}
          >
            +
          </Button>
        </div>

        <CardActions disableSpacing>
          <Button
            className={classes.addToCart}
            aria-label="Add to Cart"
            onClick={handleAddToCart}
          >
            <HiShoppingCart style={{ marginRight: "3px" }} />
            Add To Cart
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};

export default Product;

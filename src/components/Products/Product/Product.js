import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";
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
  const [showAddToCart, setShowAddToCart] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product.id, quantity);
    setShowAddToCart(true);

    setTimeout(() => {
      setShowAddToCart(false);
    }, 5000);
  };

  return (
    <>
      {showAddToCart && (
        <motion.div
          initial={{ y: "100px", opacity: "0" }}
          animate={{ y: "0", opacity: "1" }}
          transition={{ ease: "easeOut", duration: 0.2 }}
          className={classes.addToCartMessage}
        >
          <Typography variant="h4" className={classes.addToCartText}>
            Item Added to Cart
          </Typography>
          <div
            className={classes.addtoCartIcon}
            onClick={() => setShowAddToCart(false)}
          >
            <GrFormClose />
          </div>
        </motion.div>
      )}
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
              variant="h3"
            >
              {product.name}
            </Typography>
            <Typography
              className={classes.productPrice}
              gutterBottom
              variant="h5"
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
              &nbsp;{quantity} Lb&nbsp;
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
    </>
  );
};

export default Product;

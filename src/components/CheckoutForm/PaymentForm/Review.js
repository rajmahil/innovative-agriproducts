import React from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import useStyles from "./styles";

const Review = ({ checkoutToken, shippingPrice }) => {
  const classes = useStyles();
  const grandTotal = (checkoutToken.live.subtotal.raw + shippingPrice).toFixed(
    2
  );

  return (
    <>
      <Typography className={classes.formHeading} variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {checkoutToken.live.line_items.map((product) => (
          <ListItem style={{ padding: "10px 0" }} key={product.name}>
            <ListItemText
              disableTypography
              primary={
                <Typography className={classes.productName}>
                  {product.name}
                </Typography>
              }
              secondary={
                <Typography className={classes.productQuantity}>
                  Quantity: {product.quantity}
                </Typography>
              }
            />
            <Typography className={classes.productPrice} variant="body2">
              {product.line_total.formatted_with_symbol}
            </Typography>
          </ListItem>
        ))}
        <ListItem style={{ padding: "0px 0" }}>
          <ListItemText
            disableTypography
            primary={
              <Typography className={classes.productName}>Shipping</Typography>
            }
          />
          <Typography className={classes.productPrice} variant="body2">
            ${shippingPrice.toFixed(2)}
          </Typography>
        </ListItem>

        <ListItem style={{ padding: "10px 0" }}>
          <ListItemText
            disableTypography
            primary={
              <Typography className={classes.productName}>Total</Typography>
            }
          />
          <Typography className={classes.productPrice} variant="body2">
            ${grandTotal}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Review;

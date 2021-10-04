import React, { useState, useEffect } from "react";
import {
  CssBaseline,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

import { commerce } from "../../../lib/commerce";
import AddressForm from "../AddressForm/AddressForm";
import PaymentForm from "../PaymentForm/PaymentForm";
import useStyles from "./styles";

const steps = ["Shipping address", "Payment details"];

const Checkout = ({ cart, onCaptureCheckout, order, error }) => {
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [shippingData, setShippingData] = useState({});
  const [shippingPrice, setshippingPrice] = useState(0);
  const [pickUp, setPickUp] = useState("");

  const classes = useStyles();
  const history = useHistory();

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  useEffect(() => {
    if (cart.id) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, {
            type: "cart",
          });

          setCheckoutToken(token);
        } catch {
          if (activeStep !== steps.length) history.push("/");
        }
      };

      generateToken();
    }
  }, [cart]);

  const next = (data) => {
    setShippingData(data);
    setshippingPrice(data.shippingPrice.price.raw);
    setPickUp(data.pickupTime);
    nextStep();
  };

  console.log(shippingData);

  let Confirmation = () =>
    order.customer ? (
      <>
        <div>
          <Typography className={classes.addressHeading} variant="h5">
            Thank you for your purchase, {order.customer.firstname}{" "}
            {order.customer.lastname}!
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="subtitle2">
            Your order will be available for pick up on {pickUp}, at NO: 30665
            Haight Road (RGE Road 3044), Corman Park, SK <br /> <br /> Order
            ref: {order.customer_reference}
          </Typography>
        </div>
        <br />
        <Button
          className={classes.mainButton}
          component={Link}
          type="button"
          to="/"
        >
          Back to home
        </Button>
      </>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );

  if (error) {
    Confirmation = () => (
      <>
        <Typography variant="h5">Error: {error}</Typography>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">
          Back to home
        </Button>
      </>
    );
  }

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm
        checkoutToken={checkoutToken}
        nextStep={nextStep}
        setShippingData={setShippingData}
        next={next}
      />
    ) : (
      <PaymentForm
        checkoutToken={checkoutToken}
        nextStep={nextStep}
        backStep={backStep}
        shippingData={shippingData}
        shippingPrice={shippingPrice}
        onCaptureCheckout={onCaptureCheckout}
      />
    );

  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography
            className={classes.checkoutHeading}
            variant="h4"
            align="center"
          >
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel
                  StepIconProps={{
                    classes: {
                      root: classes.icon,
                      active: classes.activeIcon,
                      completed: classes.completedIcon,
                    },
                  }}
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;

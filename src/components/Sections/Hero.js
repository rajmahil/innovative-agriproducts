import React, { useState, useEffect } from "react";
import { Card, Grid, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";
import { HashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import Slide from "@material-ui/core/Slide";

const Hero = () => {
  const classes = useStyles();

  return (
    <Card className={classes.heroContainer} id="heroSection">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.8 }}
        className={classes.heroContentWrap}
      >
        <Typography className={classes.heroHeading} variant="h1">
          Locally Grown, Sustainably Farmed, Freshly Picked
        </Typography>
        <Typography
          className={classes.heroSubtitle}
          variant="subtitle1"
          gutterBottom
        >
          We pride ourselves in producing nutrient-rich garlic, grown locally
          here in Saskatoon. Directly from our farm to your family's kitchen,
          click "Shop Now" to place your order!
        </Typography>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <HashLink
            smooth
            className={classes.mainButton}
            to="/#shopSection"
            style={{
              textDecoration: "none",
              padding: "8px 24px",
              fontSize: "1.6em",
            }}
          >
            Shop Now!
          </HashLink>
          <HashLink
            smooth
            className={classes.buttonSecWhite}
            to="/#contactSection"
            style={{
              textDecoration: "none",
              padding: "8px 24px",
              fontSize: "1.6em",
            }}
          >
            Contact Us
          </HashLink>
        </div>
      </motion.div>
    </Card>
  );
};

export default Hero;

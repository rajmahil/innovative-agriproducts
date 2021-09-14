import React from "react";
import { Card, Typography, Grid, Button } from "@material-ui/core";
import { HashLink } from "react-router-hash-link";
import useStyles from "./styles";
import { FaMapMarkerAlt, FaBalanceScale, FaLeaf } from "react-icons/fa";
import valueGarlicImage from "../../Images/valueGarlicImage.png";

const ValueProp = () => {
  const classes = useStyles();
  return (
    <Card container className={classes.valuePropsContainer}>
      <Grid container style={{ marginBottom: "90px", maxWidth: "1240px" }}>
        <Grid item xs={12} md={6} style={{ overflow: "none" }}>
          <img
            src={valueGarlicImage}
            alt="innovative-agriproducts-sask"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={6} className={classes.valuePropsParagraph}>
          <Typography
            className={classes.sectionHeading}
            variant="h2"
            style={{ color: "#fff" }}
          >
            Our Philosophy
          </Typography>
          <Typography
            className={classes.sectionParagraph}
            style={{ color: "#fff" }}
            variant="body1"
          >
            Our goal is less travel, less waste, and more freshness. Typically,
            large amounts of food is wasted in distribution, warehousing, and
            merchandising. We believe in delivering straight from our farm to
            your family's kitchen, reducing enormous food waste. Being located
            close to home means less fuel and generating fewer greenhouse gases.
            On average, locally grown fresh food is generally healthier, more
            nutritious, and better-tasting due to reduced transit times. Food
            imported from afar is older and waits in distribution facilities for
            a long time before reaching your grocery store. The more steps
            between you and the source of your food, the greater the risk of
            contamination. Food cultivated in distant locations may pose food
            safety concerns during harvesting, washing, transportation, and
            distribution. At Innovative Agriproducts, we ensure our food is
            grown safely and without the use of pesticides or herbicides.
          </Typography>
          <HashLink
            smooth
            to="/#shopSection"
            style={{
              textDecoration: "none",
              padding: "8px 24px",
              fontSize: "1.6em",
            }}
            className={classes.buttonSecWhite}
          >
            View Products
          </HashLink>
        </Grid>
      </Grid>
      <Typography
        variant="h2"
        className={classes.sectionHeading}
        style={{ color: "#fff", textAlign: "center" }}
      >
        Innovative Agriculture
      </Typography>
      <Grid
        container
        justify="center"
        style={{ maxWidth: "1240px", color: "#fff" }}
      >
        <Grid item className={classes.propsContentWrap} xs={12} md={4}>
          <FaLeaf style={{ fontSize: "4em" }} />
          <Typography variant="h3" className={classes.propsHeading}>
            Fresh
          </Typography>
          <Typography variant="body1" className={classes.propsParagraph}>
            Producing sustainable fresh food is our goal. We ensure our food is
            grown safely and picked fresh without the use of pesticides or
            herbicides.
          </Typography>
        </Grid>
        <Grid item className={classes.propsContentWrap} xs={12} md={4}>
          <FaMapMarkerAlt style={{ fontSize: "4em" }} />
          <Typography variant="h3" className={classes.propsHeading}>
            Local
          </Typography>
          <Typography variant="body1" className={classes.propsParagraph}>
            Locally grown nutrient-rich food, straight from our farm to your
            family's kitchen. Reducing carbon emissions, improving food
            security, and supporting the local economy.
          </Typography>
        </Grid>
        <Grid item className={classes.propsContentWrap} xs={12} md={4}>
          <FaBalanceScale style={{ fontSize: "4em" }} />
          <Typography variant="h3" className={classes.propsHeading}>
            Ethical
          </Typography>
          <Typography variant="body1" className={classes.propsParagraph}>
            We believe in and value ethical farming. Therefore, we use
            traditional methods that benefit the environment, animals, farmers,
            and health.
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ValueProp;

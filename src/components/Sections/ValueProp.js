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
          <img src={valueGarlicImage} style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} md={6} className={classes.valuePropsParagraph}>
          <Typography
            className={classes.sectionHeading}
            style={{ color: "#fff" }}
          >
            Our Philosophy
          </Typography>
          <Typography
            className={classes.sectionParagraph}
            style={{ color: "#fff" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
            fringilla aliquam. Nullam magna massa, ullamcorper non libero et,
            tempus vehicula quam. Vestibulum molestie turpis eget sagittis
            convallis. Ut pharetra vestibulum enim, semper blandit orci ultrices
            ac. Donec turpis velit, cursus a nisl et, bibendum dictum diam. Sed
            bibendum porttitor leo, in tincidunt ante pellentesque vel. Cras
            suscipit maximus tortor sit amet feugiat. Sed vitae nisi gravida,
            facilisis metus a, lobortis erat. Phasellus rhoncus ac dui ac
            condimentum. Quisque eu lacus nec dui aliquet porttitor vel nec
            quam. Donec aliquet eros vitae dui aliquam tristique. Vivamus eget
            lorem vel nibh ornare sollicitudin et sit amet felis. Sed pharetra
            massa nec sem fringilla, at egestas massa laoreet. Suspendisse
            potenti. Curabitur ultrices, nisi in dictum vulputate, lacus urna
            viverra tellus, quis venenatis risus massa at libero. Curabitur et
            est id nisl ultricies elementum. Ut eleifend id eros sit amet
            tincidunt. In in massa nisl. Phasellus ultrices bibendum nulla
            ultricies euismod. Duis rutrum nibh sed placerat ultricies. Duis
            hendrerit id nisi id facilisis.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
            fringilla aliquam. Nullam magna massa, ullamcorper non libero et,
            tempus vehicula quam. Vestibulum molestie turpis eget sagittis
            convallis. Ut pharetra vestibulum enim.
          </Typography>
        </Grid>
        <Grid item className={classes.propsContentWrap} xs={12} md={4}>
          <FaMapMarkerAlt style={{ fontSize: "4em" }} />
          <Typography variant="h3" className={classes.propsHeading}>
            Local
          </Typography>
          <Typography variant="body1" className={classes.propsParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
            fringilla aliquam. Nullam magna massa, ullamcorper non libero et,
            tempus vehicula quam. Vestibulum molestie turpis eget sagittis
            convallis. Ut pharetra vestibulum enim.
          </Typography>
        </Grid>
        <Grid item className={classes.propsContentWrap} xs={12} md={4}>
          <FaBalanceScale style={{ fontSize: "4em" }} />
          <Typography variant="h3" className={classes.propsHeading}>
            Ethical
          </Typography>
          <Typography variant="body1" className={classes.propsParagraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
            fringilla aliquam. Nullam magna massa, ullamcorper non libero et,
            tempus vehicula quam. Vestibulum molestie turpis eget sagittis
            convallis. Ut pharetra vestibulum enim.
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ValueProp;

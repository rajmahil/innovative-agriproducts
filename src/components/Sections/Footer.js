import React from "react";
import useStyles from "./styles";
import rubenLogoWhite from "../../Images/rubenLogoWhite.png";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Grid,
} from "@material-ui/core";

const Footer = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.footerContainer}>
      <Grid container className={classes.footerWrap} md={10}>
        <NavHashLink
          smooth
          to="./#heroSection"
          className={classes.footerSections}
        >
          <img
            src={rubenLogoWhite}
            alt="Innovative Agriproducts Inc"
            style={{ width: "250px" }}
          />
        </NavHashLink>
      </Grid>
      <div
        style={{
          textAlign: "center",
          paddingBottom: "45px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          component={Link}
          style={{
            textDecoration: "none",
            color: "#fff",
            margin: "10px",
          }}
        >
          Emial: info@yourdomain.com
        </Typography>
        <Typography
          component={Link}
          style={{
            textDecoration: "none",
            color: "#fff",
            margin: "10px",
          }}
        >
          Phone: (306) 716-3130
        </Typography>
      </div>
      <Typography
        className={classes.footerSections}
        style={{ fontWeight: "300", fontSize: "1.1em" }}
      >
        © Copyright 2021 - 2024. All rights reserved.
      </Typography>
    </AppBar>
  );
};

export default Footer;

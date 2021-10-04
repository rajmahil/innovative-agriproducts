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
            alt="Innovative Agriproducts Inc Saskatoon"
            style={{ width: "250px" }}
          />
        </NavHashLink>
      </Grid>
      <div
        style={{
          textAlign: "center",
          paddingBottom: "45px",
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            marginBottom: "20px",
            flexWrap: "wrap",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            component={Link}
            to={{ pathname: "mailto:info@innovativeagriproducts.ca" }}
            target="_blank"
            style={{
              textDecoration: "none",
              color: "#fff",
              margin: "10px",
            }}
          >
            Email: info@innovativeagriproducts.ca
          </Typography>
          <Typography
            component={Link}
            to={{ pathname: "tel:3066123105" }}
            target="_blank"
            style={{
              textDecoration: "none",
              color: "#fff",
              margin: "10px",
            }}
          >
            Phone: (306) 954-6829
          </Typography>
        </div>
        <Typography
          style={{
            color: "#fff",
            fontWeight: "600",
          }}
        >
          Farm/Pick up Location Address:
        </Typography>
        <Typography
          component={Link}
          to={{
            pathname:
              "https://www.google.com/maps/place/Haight+Rd,+Saskatchewan+S0K+0Y0/@52.0707119,-106.5296132,17z/data=!3m1!4b1!4m5!3m4!1s0x5304f26a49204845:0x4e29c5084489d170!8m2!3d52.0707086!4d-106.5274245",
          }}
          target="_blank"
          style={{
            textDecoration: "none",
            color: "#fff",
            margin: "10px",
            cursor: "pointer",
          }}
        >
          NO: 30665 Haight Road (RGE Road 3044), <br />
          Corman Park, SK
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

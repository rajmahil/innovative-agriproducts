import React from "react";
import { Card, Grid, Typography, Button } from "@material-ui/core";
import useStyles from "./styles";
import CloseIcon from "@material-ui/icons/Close";
import { NavHashLink } from "react-router-hash-link";
import Fade from "@material-ui/core/Fade";

const Sidebar = ({ mobileOpen, toggle }) => {
  const classes = useStyles();
  return (
    <>
      {mobileOpen && (
        <Fade in={mobileOpen}>
          <Card className={classes.sidebarWrap}>
            <div className={classes.closeMenuBtn} onClick={toggle}>
              <CloseIcon />
            </div>
            <div className={classes.navLinksWrap}>
              <NavHashLink
                className={classes.navLinks}
                style={{ marginBottom: "10%" }}
                smooth
                to="/#heroSection"
                onClick={toggle}
              >
                Home
              </NavHashLink>
              <NavHashLink
                className={classes.navLinks}
                style={{ marginBottom: "10%" }}
                smooth
                to="/#aboutSection"
                onClick={toggle}
              >
                About
              </NavHashLink>
              <NavHashLink
                className={classes.navLinks}
                style={{ marginBottom: "10%" }}
                smooth
                to="/#contactSection"
                onClick={toggle}
              >
                Contact
              </NavHashLink>

              <NavHashLink
                to="/#shopSection"
                smooth
                onClick={toggle}
                className={classes.mainButton}
                style={{
                  textDecoration: "none",
                  padding: "8px 24px",
                  fontSize: "1.6em",
                }}
              >
                Shop Now!
              </NavHashLink>
            </div>
          </Card>
        </Fade>
      )}
    </>
  );
};

export default Sidebar;

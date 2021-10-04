import React, { useState, useEffect } from "react";
import { NavHashLink, HashLink } from "react-router-hash-link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
  Card,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, useLocation } from "react-router-dom";
import RubenLogo from "../../Images/rubenLogo.png";
import Slide from "@material-ui/core/Slide";
import useStyles from "./styles";

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const Navbar = ({ totalItems, toggle, mobileOpen }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [windowWidth, setWindowWidth] = useState(getWidth());
  const [onLoad, setOnLoad] = useState(false);

  const classes = useStyles();
  const location = useLocation();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = "primary-search-account-menu-mobile";

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton
          component={Link}
          to="/cart"
          aria-label="Show cart items"
          color="inherit"
        >
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  useEffect(() => {
    const resizeListener = () => {
      // change width from the state object
      setWindowWidth(getWidth());
    };
    // set resize listener
    window.addEventListener("resize", resizeListener);

    // clean up function
    return () => {
      // remove resize listener
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  useEffect(() => {
    setOnLoad(true);
  }, []);

  return (
    <>
      {!mobileOpen && (
        <Slide
          direction="down"
          in={onLoad}
          mountOnEnter
          unmountOnExit
          timeout={800}
        >
          <AppBar
            position="fixed"
            className={classes.appBar}
            color="inherit"
            mobileOpen={mobileOpen}
          >
            <Toolbar>
              <NavHashLink smooth to="/#heroSection" className={classes.title}>
                <img
                  src={RubenLogo}
                  alt="Innovative Agriproducts Inc"
                  className={classes.image}
                />
              </NavHashLink>
              {(windowWidth > 800) & (location.pathname === "/") ? (
                <div className={classes.navLinksWrap}>
                  <NavHashLink
                    className={classes.navLinks}
                    smooth
                    to="/#heroSection"
                  >
                    Home
                  </NavHashLink>
                  <NavHashLink
                    className={classes.navLinks}
                    smooth
                    to="/#aboutSection"
                  >
                    About
                  </NavHashLink>
                  <NavHashLink
                    className={classes.navLinks}
                    smooth
                    to="/#shopSection"
                  >
                    Shop
                  </NavHashLink>
                  <NavHashLink
                    className={classes.navLinks}
                    smooth
                    to="/#contactSection"
                  >
                    Contact
                  </NavHashLink>
                </div>
              ) : null}
              <div className={classes.grow} />
              {location.pathname === "/" && (
                <div className={classes.button}>
                  <IconButton
                    className={classes.viewCartBtn}
                    component={Link}
                    to="/cart"
                    aria-label="Show cart items"
                    color="inherit"
                  >
                    <Badge
                      badgeContent={totalItems}
                      classes={{ badge: classes.cartBadge }}
                    >
                      <ShoppingCart style={{ marginRight: "3px" }} />
                    </Badge>
                  </IconButton>
                  {windowWidth < 800 && (
                    <IconButton
                      className={classes.mobileMenuBtn}
                      component={Link}
                      onClick={toggle}
                    >
                      <MenuIcon />
                    </IconButton>
                  )}
                </div>
              )}
            </Toolbar>
          </AppBar>
        </Slide>
      )}
    </>
  );
};

export default Navbar;

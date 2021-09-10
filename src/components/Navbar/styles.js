import { makeStyles, fade } from "@material-ui/core/styles";
import { Autorenew } from "@material-ui/icons";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    background: "#fff",
    padding: "5px 0px",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
    cursor: "pointer",
  },
  image: {
    width: "180px",
    height: "auto",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  navLinksWrap: {
    width: "auto",
    paddingRight: "100px",
  },

  navLinks: {
    fontFamily: "rift, sans-serif",
    fontWeight: "600",
    fontStyle: "normal",
    textDecoration: "none",
    fontSize: "1.4em",
    color: "#000",
    marginLeft: "20px",
    marginRight: "20px",

    "&:hover": {
      transition: "all 0.5s ease",
      color: "#407f3d",
    },
  },

  viewCartBtn: {
    borderRadius: "100px",
    color: "#000",
    fontSize: "1.4em",

    "&:hover": {
      transition: "all 0.5s ease",
      background: "#F4F4F4",
    },
  },

  cartBadge: {
    background: "#407f3d",
    color: "#fff",
    fontFamily: "acumin-pro, sans-serif",
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: "0.6em",
    borderRadius: "100px",
    padding: "8px",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },

  mobileMenuBtn: {
    color: "#000",
  },
}));

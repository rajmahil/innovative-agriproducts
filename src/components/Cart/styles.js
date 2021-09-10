import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: "42px",
    marginBottom: "42px",
    fontFamily: "rift, sans-serif",
    fontWeight: "700",
    fontSize: "4em",
    fontStyle: "normal",
    textAlign: "center",

    [theme.breakpoints.down("sm")]: {
      fontSize: "2.4em",
    },
  },

  subTitleText: {
    fontFamily: "rift, sans-serif",
    fontWeight: "600",
    fontSize: "2.6em",

    [theme.breakpoints.down("sm")]: {
      fontSize: "2em",
    },
  },
  emptyButton: {
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },

  buttonSec: {
    fontFamily: "rift, sans-serif",
    fontWeight: "600",
    fontStyle: "normal",
    borderRadius: "0px",
    border: "2px #000 solid",
    padding: "5px 20px",
    background: "#fff",
    color: "#000",
    fontSize: "1.4em",
    marginLeft: "3px",
    marginRight: "3px",
    boxShadow: "none",

    "&:hover": {
      transition: "all 0.3s ease-in-out",
      background: "#000",
      boxShadow: "none",
      color: "#fff",
    },

    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
  },

  mainButton: {
    fontFamily: "rift, sans-serif",
    fontWeight: "600",
    fontStyle: "normal",
    borderRadius: "0px",
    padding: "8px 20px",
    background: "#407f3d",
    color: "#fff",
    fontSize: "1.4em",
    marginLeft: "3px",
    marginRight: "3px",
    boxShadow: "none",

    "&:hover": {
      background: "#000",
      boxShadow: "none",
    },
  },
  checkoutButton: {
    minWidth: "150px",
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    display: "flex",
    marginTop: "10%",
    width: "100%",
    justifyContent: "space-between",
  },

  emptyCartDiv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

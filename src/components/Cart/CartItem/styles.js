import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: "100%",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    borderRadius: "0px",
  },
  media: {
    height: 260,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardActions: {
    justifyContent: "space-between",
    padding: "12px 28px 28px 28px",

    [theme.breakpoints.down("xs")]: {
      padding: "0px 18px 18px 18px",
    },
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },

  productWrap: {
    padding: "28px 28px 0px 28px",

    [theme.breakpoints.down("xs")]: {
      padding: "18px 18px 0px 18px",
    },
  },

  productName: {
    fontFamily: "rift, sans-serif",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: "2em",
  },

  productPrice: {
    fontFamily: "rift, sans-serif",
    fontWeight: "500",
    fontSize: "2em",
    fontStyle: "normal",
  },
  quantityNum: {
    fontFamily: "rift, sans-serif",
    fontWeight: "600",
    fontStyle: "normal",
    fontSize: "1.4em",
    marginLeft: "10px",
    marginRight: "10px",
  },

  quantityBtn: {
    fontFamily: "rift, sans-serif",
    fontWeight: "600",
    fontStyle: "normal",
    fontSize: "2.2em",
    background: "#f5f5f5",
    borderRadius: "0px",

    "&:hover": {
      transition: "all 0.3s ease-in-out",
      background: "#000",
      boxShadow: "none",
      color: "#fff",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6em",
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
      fontSize: "1.2em",
    },
  },
}));

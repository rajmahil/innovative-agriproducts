import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
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

  formHeading: {
    fontFamily: "rift, sans-serif",
    fontWeight: "600",
    fontStyle: "normal",
    fontSize: "1.6em",
  },
  productName: {
    fontFamily: "rift, sans-serif",
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: "1.6em",
  },

  productQuantity: {
    ontFamily: "acumin, sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "1em",
  },

  productPrice: {
    fontFamily: "rift, sans-serif",
    fontWeight: "500",
    fontSize: "1.4em",
    fontStyle: "normal",
  },
}));

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  inputField: {
    fontFamily: "acumin-pro, sans-serif",
    fontWeight: "600",
    fontStyle: "normal",
    color: "#000",
  },

  formHeading: {
    fontFamily: "rift, sans-serif",
    fontWeight: "600",
    fontStyle: "normal",
    fontSize: "1.6em",
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
}));

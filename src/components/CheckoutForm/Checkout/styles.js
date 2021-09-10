import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  toolbar: theme.mixins.toolbar,
  layout: {
    marginTop: "5%",
    marginBottom: "5%",
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  checkoutHeading: {
    fontFamily: "rift, sans-serif",
    fontWeight: "700",
    fontStyle: "normal",
  },

  addressHeading: {
    fontFamily: "acumin, sans-serif",
    fontWeight: "500",
    fontStyle: "normal",
    fontSize: "1.6em",
  },

  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
    borderRadius: "0px",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginTop: 60,
    },
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },

  icon: {
    color: "#D8D8D8",

    "&$activeIcon": {
      color: "#407f3d",
    },
    "&$completedIcon": {
      color: "#000",
    },
  },

  activeIcon: {},
  completedIcon: {},

  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  divider: {
    margin: "20px 0",
  },
  spinner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#407f3d",
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

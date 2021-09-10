import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: "90px 45px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    [theme.breakpoints.down("xs")]: {
      padding: "45px 18px",
    },
  },
  root: {
    flexGrow: 1,
  },

  sectionHeading: {
    fontFamily: "rift, sans-serif",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: "3em",
    lineHeight: "50px",
    paddingBottom: "8px",
  },
}));

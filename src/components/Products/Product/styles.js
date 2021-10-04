import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: "100%",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    borderRadius: "0px",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 28px 28px 28px",
  },

  addToCartMessage: {
    position: "fixed",
    bottom: "0",
    left: "50%",
    width: "250px",
    padding: "10px 16px",
    marginLeft: "-125px",
    marginBottom: "20px",
    background: "#000",
    zIndex: "10000",
    textAlign: "center",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  },

  addToCartText: {
    color: "#fff",
    fontSize: "1.4em",
    fontFamily: "rift, sans-serif",
    fontWeight: "700",
  },

  addtoCartIcon: {
    backgroundColor: "#fff",
    fontSize: "2.5em",
    lineHeight: "0",
    height: "35px",
    width: "35px",
    cursor: "pointer",
  },

  quantityNum: {
    fontFamily: "rift, sans-serif",
    fontWeight: "600",
    fontStyle: "normal",
    fontSize: "1.2em",
    marginLeft: "8px",
    marginRight: "8px",
  },

  quantityBtn: {
    fontFamily: "rift, sans-serif",
    fontWeight: "600",
    fontStyle: "normal",
    fontSize: "2em",
    background: "#f5f5f5",
    borderRadius: "0px",
    minWidth: "0px",
    width: "40px",
    height: "40px",

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

  productWrap: {
    padding: "28px 28px 0px 28px",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
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
  buttons: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  productDescription: {
    fontFamily: "acumin-pro, sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
  },

  addToCart: {
    fontFamily: "rift, sans-serif",
    fontWeight: "600",
    fontStyle: "normal",
    borderRadius: "0px",
    padding: "8px 10px",
    background: "#2b241d",
    color: "#fff",
    fontSize: "1.2em",

    "&:hover": {
      background: "#407f3d",
    },
  },
}));

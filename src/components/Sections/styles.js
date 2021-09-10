import { makeStyles } from "@material-ui/core/styles";
import garlicImageHero from "../../Images/garlicImageHero.png";
import aboutRuben from "../../Images/aboutRuben.png";
import aboutRubenMobile from "../../Images/aboutRubenMobile.png";
import contactSectionBg from "../../Images/contactSectionBg.jpg";

export default makeStyles((theme) => ({
  heroContainer: {
    height: "100vh",
    width: "100%",
    background: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0px",
    backgroundImage: `url(${garlicImageHero})`,

    [theme.breakpoints.down("1080")]: {
      flexDirection: "column-reverse",
    },
  },

  // heroImageWrap: {
  //   width: "50%",
  //   height: "100%",
  //   background: "green",
  //   padding: "45px",
  //   backgroundImage: `url(${garlicImageHero})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   backgroundRepeat: "no-repeat",

  //   [theme.breakpoints.down("1080")]: {
  //     width: "100%",
  //     height: "800px",
  //   },
  // },

  heroContentWrap: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "650px",
    width: "100%",
    padding: "45px 45px",

    [theme.breakpoints.down("1080")]: {
      width: "100%",
      paddingTop: "125px",
    },

    [theme.breakpoints.down("xs")]: {
      padding: "24px",
      paddingTop: "100px",
    },
  },

  heroHeading: {
    fontFamily: "rift, sans-serif",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: "4.6em",
    textAlign: "center",
    color: "#fff",

    [theme.breakpoints.down("xs")]: {
      fontSize: "3.2em",
    },
  },

  heroSubtitle: {
    fontSize: "1.2em",
    fontFamily: "acumin-pro, sans-serif",
    fontWeight: "500",
    fontStyle: "normal",
    marginBottom: "28px",
    textAlign: "center",
    color: "#fff",

    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
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
      marginTop: "10px",
    },
  },

  buttonSecWhite: {
    fontFamily: "rift, sans-serif",
    fontWeight: "600",
    fontStyle: "normal",
    borderRadius: "0px",
    border: "2px #fff solid",
    padding: "5px 20px",
    background: "none",
    color: "#fff",
    fontSize: "1.4em",
    marginLeft: "3px",
    marginRight: "3px",
    boxShadow: "none",

    "&:hover": {
      transition: "all 0.3s ease-in-out",
      background: "#fff",
      boxShadow: "none",
      color: "#000",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
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
    border: "2px #407f3d solid",

    "&:hover": {
      transition: "all 0.3s ease-in-out",
      background: "#000",
      boxShadow: "none",
      border: "2px #000 solid",
    },

    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
    },
  },

  sidebarWrap: {
    height: "100vh",
    width: "100%",
    background: "fff",
    zIndex: "100",
    position: "fixed",
    transition: "0.3s ease-in-out",
    borderRadius: "0px",
  },

  navLinksWrap: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  navLinks: {
    fontFamily: "rift, sans-serif",
    fontWeight: "600",
    fontStyle: "normal",
    textDecoration: "none",
    color: "#000",
    fontSize: "2em",
    marginBottom: "24px",

    "&:hover": {
      transition: "all 0.3s ease-in-out",
      color: "#407f3d",
    },
  },

  closeMenuBtn: {
    position: "fixed",
    top: "0",
    right: "0",
    padding: "20px",
    cursor: "pointer",
    marginTop: "12px",
    marginRight: "12px",

    "&:hover": {
      transition: "all 0.3s ease-in-out",
      background: "#f5f5f5",
    },
  },

  aboutContainer: {
    width: "100%",
    borderRadius: "0px",
    paddingLeft: "55%",
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    backgroundImage: `url(${aboutRuben})`,
    backgroundRepeat: "no-repeat",

    [theme.breakpoints.down("1280")]: {
      backgroundPositionX: "-150px",
    },

    [theme.breakpoints.down("1180")]: {
      paddingTop: "900px",
      paddingLeft: "0px",
      backgroundImage: `url(${aboutRubenMobile})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center top",
    },
  },

  sectionContentWrap: {
    padding: "125px 45px",
    maxWidth: "700px",

    [theme.breakpoints.down("1280")]: {
      padding: "45px 45px",
    },

    [theme.breakpoints.down("1180")]: {
      padding: "45px 18px",
    },
  },

  sectionHeading: {
    fontFamily: "rift, sans-serif",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: "3em",
    lineHeight: "50px",
    marginBottom: "12px",
  },

  greenSpan: {
    color: "#407f3d",
  },

  sectionParagraph: {
    fontFamily: "acumin-pro, sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
    fontSize: "1.1em",
    color: "#808080",
    lineHeight: "28px",
    marginBottom: "20px",
  },

  valuePropsContainer: {
    padding: "90px 45px",
    background: "#407f3d",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    [theme.breakpoints.down("1280")]: {
      padding: "45px 45px",
    },

    [theme.breakpoints.down("1180")]: {
      padding: "45px 18px",
    },
  },

  valuePropsParagraph: {
    paddingLeft: "45px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",

    [theme.breakpoints.down("960")]: {
      padding: "45px 0px",
    },
  },

  propsContentWrap: {
    textAlign: "center",
    padding: "24px",
    marginBottom: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "500px",

    [theme.breakpoints.down("xs")]: {
      padding: "0px",
    },
  },

  propsHeading: {
    fontFamily: "acumin-pro, sans-serif",
    fontWeight: "700",
    fontStyle: "normal",
    fontSize: "2.2em",
    marginTop: "22px",
    marginBottom: "10px",
  },

  propsParagraph: {
    fontFamily: "acumin-pro, sans-serif",
    fontWeight: "300",
    fontStyle: "normal",
    fontSize: "1em",
    lineHeight: "24px",
  },

  galleryWrap: {
    padding: "45px",

    [theme.breakpoints.down("480")]: {
      padding: "0px",
    },
  },

  contactSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "800px",
    padding: "90px 45px",
    backgroundImage: `url(${contactSectionBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "0px",

    [theme.breakpoints.down("1280")]: {
      padding: "45px 45px",
    },

    [theme.breakpoints.down("1180")]: {
      padding: "45px 18px",
    },

    [theme.breakpoints.down("480")]: {
      padding: "0px",
      height: "auto",
      background: "#fff",
    },
  },

  formWrap: {
    background: "#fff",
    padding: "42px",
    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
    width: "500px",
    textAlign: "center",

    [theme.breakpoints.down("480")]: {
      padding: "45px 18px",
    },
  },

  formInputField: {
    height: "50px",
    width: "100%",
    marginBottom: "12px",
    background: "#f2f2f2",
    paddingLeft: "10px",
    border: "none",
    fontFamily: "acumin-pro, sans-serif",
    fontWeight: "400",
    fontStyle: "normal",

    "&::placeholder": {
      fontFamily: "acumin-pro, sans-serif",
      fontWeight: "400",
      fontStyle: "normal",
      color: "#4d4d4d",
    },
  },

  formTextArea: {
    marginBottom: "12px",
    width: "100%",
    height: "200px",
    background: "#f5f5f5",
    padding: "10px",
    border: "0px",
    fontFamily: "acumin-pro, sans-serif",
    fontWeight: "400",
    fontStyle: "normal",

    "&::placeholder": {
      fontFamily: "acumin-pro, sans-serif",
      fontWeight: "400",
      fontStyle: "normal",
      color: "#4d4d4d",
    },
  },

  footerContainer: {
    background: "#000",
    width: "100%",
    position: "static",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  footerWrap: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "45px",

    [theme.breakpoints.down("1280")]: {
      padding: "45px 45px",
    },

    [theme.breakpoints.down("1180")]: {
      padding: "45px 18px",
    },
  },

  footerSections: {
    textAlign: "center",
    fontFamily: "acumin-pro, sans-serif",
    fontWeight: "500",
    fontStyle: "normal",
    textDecoration: "none",
    color: "#fff",
    fontSize: "1.2em",
    marginBottom: "28px",
  },
}));

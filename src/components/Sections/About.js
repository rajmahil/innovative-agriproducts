import { Button, Card, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import { HashLink } from "react-router-hash-link";
const About = () => {
  const classes = useStyles();
  return (
    <Card className={classes.aboutContainer} id="aboutSection">
      <div className={classes.sectionContentWrap}>
        <Typography variant="h2" className={classes.sectionHeading}>
          Our Founder -{" "}
          <Typography variant="span" className={classes.greenSpan}>
            Dr. Ruben Rajakumar
          </Typography>
        </Typography>
        <Typography
          variant="body1"
          style={{ paddingBottom: "24px" }}
          className={classes.sectionParagraph}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus
          fringilla aliquam. Nullam magna massa, ullamcorper non libero et,
          tempus vehicula quam. Vestibulum molestie turpis eget sagittis
          convallis. Ut pharetra vestibulum enim, semper blandit orci ultrices
          ac. Donec turpis velit, cursus a nisl et, bibendum dictum diam. Sed
          bibendum porttitor leo, in tincidunt ante pellentesque vel. Cras
          suscipit maximus tortor sit amet feugiat. Sed vitae nisi gravida,
          facilisis metus a, lobortis erat. Phasellus rhoncus ac dui ac
          condimentum. Quisque eu lacus nec dui aliquet porttitor vel nec quam.
          Donec aliquet eros vitae dui aliquam tristique. Vivamus eget lorem vel
          nibh ornare sollicitudin et sit amet felis. Sed pharetra massa nec sem
          fringilla, at egestas massa laoreet. Suspendisse potenti. Curabitur
          ultrices, nisi in dictum vulputate, lacus urna viverra tellus, quis
          venenatis risus massa at libero. Curabitur et est id nisl ultricies
          elementum. Ut eleifend id eros sit amet tincidunt. In in massa nisl.
          Phasellus ultrices bibendum nulla ultricies euismod. Duis rutrum nibh
          sed placerat ultricies. Duis hendrerit id nisi id facilisis.
        </Typography>
        <div>
          <HashLink
            smooth
            to="/#contactSection"
            style={{
              textDecoration: "none",
              padding: "8px 24px",
              fontSize: "1.6em",
            }}
            className={classes.buttonSec}
          >
            Contact Us
          </HashLink>
        </div>
      </div>
    </Card>
  );
};

export default About;

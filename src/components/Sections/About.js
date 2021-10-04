import { Button, Card, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
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
          Dr. Ruben Rajakumar is a passionate believer who is concerned about
          the social determinants of health, poverty reduction, and
          environmental sustainability. As a medical practitioner, Dr. Ruben
          Rajakumar is currently promoting health care innovations to
          provincial, federal governments, academic institutions, and indigenous
          leaders to improve remote northern and rural health services in
          Saskatchewan. Dr. Rajakumar is also the founder and CEO of
          Saskatchewan Heart Centre, a non-profit on a mission to create a
          cost-effective and efficient cardiac health care system in
          Saskatchewan. Saskatchewan Heart Centre works closely with innovative
          Agriproducts to provide fresh food and vegetables to our communities.
          <br /> <br />
          Dr. Ruben's interest in agriculture originates from his years as a
          physician in Saskatchewan's rural and remote areas. Due to the harsh
          climate and lack of opportunities, access to fresh fruits and
          vegetables was always an issue. As the phrase goes, "We are what we
          eat", access to nutrient-rich, fresh food is crucial for an active and
          healthy life. Therefore, Dr. Ruben founded Innovative Agriproducts to
          find new methods of improving food security and provide opportunities
          for innovation and sustainability. Innovative Agriproducts' mission is
          to support local agriculture, reduce carbon footprint by minimizing
          imports and enhance urban food security.
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

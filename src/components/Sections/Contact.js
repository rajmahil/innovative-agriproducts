import {
  Card,
  Typography,
  FormControl,
  Button,
  Input,
  TextField,
} from "@material-ui/core";
import useStyles from "./styles";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const classes = useStyles();

  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [formSub, setFormSub] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_28xiahh",
        "template_g2qltzg",
        e.target,
        "user_pgbPArOyZewJOGqWkO4T6"
      )
      .then((res) => {
        console.log(res);
        setSuccessMessage(true);
        setFormSub(true);
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage(true);
        setFormSub(true);
      });
  };

  return (
    <Card className={classes.contactSection} id="contactSection">
      <div className={classes.formWrap}>
        <Typography
          variant="h2"
          className={classes.sectionHeading}
          style={{ paddingBottom: "0px" }}
        >
          Contact Us
        </Typography>
        <Typography
          className={classes.sectionParagraph}
          variant="subtitle1"
          style={{ fontSize: "1em", lineHeight: "22px", marginBottom: "22px" }}
        >
          We promise to respond within 24 hours. You can also reach us as
          info@website.com or 306-123-4567
        </Typography>
        {!formSub && (
          <form onSubmit={sendEmail} style={{ width: "100%" }}>
            <input
              className={classes.formInputField}
              required
              placeholder="Your Name"
              name="name"
              type="text"
            />
            <input
              className={classes.formInputField}
              required
              placeholder="Your Email"
              name="email"
              type="email"
            />
            <input
              className={classes.formInputField}
              required
              placeholder="Your Phone"
              name="phone"
              type="tel"
            />
            <textarea
              className={classes.formTextArea}
              required
              placeholder="Your Message"
              name="message"
            />
            <Button type="submit" className={classes.mainButton}>
              Send Message
            </Button>
          </form>
        )}
        {formSub && (
          <div style={{ padding: "18px", background: "#000" }}>
            {successMessage && (
              <Typography style={{ color: "#fff" }}>
                Your message has been sent!
              </Typography>
            )}
            {errorMessage && (
              <Typography style={{ color: "#fff" }}>
                Error! Your message couldn't be sent.
              </Typography>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

export default Contact;

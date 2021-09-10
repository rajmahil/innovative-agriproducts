import React from "react";
import { useFormContext, Controller, useForm } from "react-hook-form";
import { TextField, Grid } from "@material-ui/core";
import useStyles from "./styles";

function FormInput({ name, label, required }) {
  const { control } = useForm();
  const isError = false;
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        as={TextField}
        className={classes.inputField}
        name={name}
        label={label}
        fullWidth
        required={required}
        error={isError}
      />
    </Grid>
  );
}

export default FormInput;

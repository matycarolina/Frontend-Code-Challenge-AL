import React from "react";
import {
  Autocomplete,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Formik, Form } from "formik";

export const CirculateOrNot = () => {
  const initVals = {
    plate: "",
  };

  return (
    <Formik enableReinitialize initialValues={initVals}>
      {() => {
        return (
          <Form>
            <Typography>Ingrese la placa del vehículo</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField name="plate" label="Placa" />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              m={4}
              sx={{ display: "flex", justifyContent: "end" }}
            >
              <Button type="submit">Consultar</Button>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

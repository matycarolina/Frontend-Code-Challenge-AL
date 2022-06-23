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
import React from "react";

export const AddCar = () => {
  const initVals = {
    plate: "",
    color: "",
    brand: "",
    model: "",
    chassis: "",
    ownerId: "",
    date: new Date(),
  };

  const top10Brands = [
    { label: "Chevrolet" },
    { label: "KIA" },
    { label: "Hyundai" },
    { label: "Toyota" },
    { label: "Great Wall" },
    { label: "JAC" },
    { label: "Chery" },
    { label: "Renault" },
    { label: "Nissan" },
    { label: "Volkswagen" },
  ];

  return (
    <Formik enableReinitialize initialValues={initVals}>
      {() => {
        return (
          <Form>
            <Typography>Ingrese los datos del vehículo</Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField name="plate" label="Placa" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField name="color" label="Color" />
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField name="chassis" label="Chasis" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField name="ownerId" label="Identificación dueño" />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField name="model" label="Modelo" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Autocomplete
                  name="brand"
                  label="Marca"
                  options={top10Brands}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Marca" />
                  )}
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              m={4}
              sx={{ display: "flex", justifyContent: "end" }}
            >
              <Button type="submit">Guardar</Button>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

import { Grid, Paper } from "@mui/material";
import React from "react";

import Styles from "./LayoutContainer.styles";
import { LayoutContainerProps as Props } from "./LayoutContainer.types";

const LayoutContainer: React.FC<Props> = props => {
  const { children } = props;

  return (
    <Styles className="LayoutContainer">
      <Grid container component="main" className="LayoutContainer__container">
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          className="LayoutContainer__image"
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          container
          alignItems="center"
          justifyContent="center"
        >
          {children}
        </Grid>
      </Grid>
    </Styles>
  );
};

LayoutContainer.defaultProps = {};

export default LayoutContainer;

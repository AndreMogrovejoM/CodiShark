import { Avatar, Box, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import CONSTANTS from "config/constants";
import Layout from "containers/Layout/Layout.container";
import useAuth from "contexts/auth/auth.hooks";
import React, { useEffect } from "react";
import { FieldValues } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";

import SignInForm from "../SignInForm/SignInForm";
import Styles from "./SignIn.styles";
import { SignInProps as Props } from "./SignIn.types";

const { ENTRY_PATH } = CONSTANTS.ROUTES;

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {`Copyright © B12 ${new Date().getFullYear()} -`}
      <Link color="inherit" href="https://mui.com/">
        Todos los derechos reservados
      </Link>
      {"."}
    </Typography>
  );
}

const SignIn: React.FC<Props> = props => {
  const { search } = useLocation();
  const { isAnonymous } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // If not authenticated
    if (isAnonymous) {
      navigate("/signin");
      return;
    }

    navigate(ENTRY_PATH);
  }, [isAnonymous, navigate, search]);

  const handleForm = (values: FieldValues) => {
    console.log(values);
  };

  return (
    <Layout>
      <Styles className="SignIn">
        <Box className="SignIn__container">
          <Avatar className="SignIn__avatar">{/*  <LockIcon /> */}</Avatar>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <SignInForm handleForm={handleForm} />

          <Copyright className="SignIn__container--copyright" />
        </Box>
      </Styles>
    </Layout>
  );
};

SignIn.defaultProps = {};

export default SignIn;

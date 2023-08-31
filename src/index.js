import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';
// import Amplify from 'aws-amplify';
// import awsmobile from './aws-exports';
// Amplify.configure(awsmobile);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Auth0Provider
  domain="manojdevopseng.us.auth0.com"
  clientId="tg9VrLeasUT0vbxVqLGBmPC2iw3G4M6q"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
><App /></Auth0Provider>);

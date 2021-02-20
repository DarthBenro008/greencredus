import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "pages/Login";
import OTP from "pages/otp";
import Main from "pages/main";
import Qr from "pages/qrPage";
import TransactionInit from "pages/TransactionInit";
import Success from "pages/Success";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Onboarding from "./pages/Onboarding";

const theme = createMuiTheme({
    typography: {
        fontFamily: "Sk-Modernist",
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Switch>
                <Route exact component={Login} path="/login" />
                <Route exact component={OTP} path="/otp" />
                <Route exact component={Main} path="/" />3
                <Route exact component={Qr} path="/qr" />
                <Route exact component={TransactionInit} path="/Transact" />
                <Route exact component={Success} path="/success" />
                <Route exact component={Onboarding} path="/ob" />
            </Switch>
        </ThemeProvider>
    );
};

export default App;

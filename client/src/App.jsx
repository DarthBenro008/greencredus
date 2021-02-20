import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "pages/Login";
import OTP from "pages/otp";
import Main from "pages/main";
import Qr from "pages/qrPage";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";

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
                <Route exact component={Main} path="/" />
                <Route exact component={Qr} path="/qr" />
            </Switch>
        </ThemeProvider>
    );
};

export default App;

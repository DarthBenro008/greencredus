import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import IconBG from "../../assets/blurred_power.svg";
import mainIcon from "../../assets/power_white.svg";

export default function OnBoradingMain() {
    const useStyles = makeStyles({
        loginPage: {
            backgroundImage: `url(${IconBG})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
        },
        mainTitle: {
            fontWeight: "bold",
            fontSize: "40px",
            lineHeight: "48px",
            letterSpacing: "0.02rem",
        },
        subTitle: {
            fontWeight: "normal",
            fontSize: "16px",
            lineHeight: "19px",
            letterSpacing: "0.02rem",
            opacity: "0.2",
        },
    });
    const classes = useStyles();
    return (
        <div className={classes.loginPage}>
            <div>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: "100vh" }}
                >
                    <Grid item xs={12}>
                        <img
                            alt="mainIcon"
                            src={mainIcon}
                            height={175}
                            width={209}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.mainTitle}>
                            GreenCredus
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.subTitle}>
                            Manage your green stuff ready
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

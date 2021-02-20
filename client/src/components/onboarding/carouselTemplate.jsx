import React from "react";
import { Box, Grid, Typography, makeStyles } from "@material-ui/core";
import OBcoin from "../../assets/ob_coin.svg";

export default function CarouselTemplate() {
    const useStyles = makeStyles({
        loginPage: {
            width: "100%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
        },
        mainTitle: {
            fontWeight: "bold",
            fontSize: "32px",
            lineHeight: "38px",
            letterSpacing: "0.02rem",
        },
        subTitle: {
            fontWeight: "normal",
            fontSize: "14px",
            lineHeight: "20px",
            letterSpacing: "0.01rem",
        },
    });
    const classes = useStyles();
    return (
        <div className={classes.loginPage}>
            <div>
                <Grid
                    container
                    spacing={4}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: "100vh", minWidth: "100vw" }}
                >
                    <Grid item xs={12}>
                        <img
                            alt="background"
                            src={OBcoin}
                            height={175}
                            width={209}
                        />
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                    >
                        <Grid item xs={12} align="left">
                            <Box mx={8}>
                                <Typography className={classes.mainTitle}>
                                    GreenCredus
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid item xs={8}>
                        <Typography className={classes.subTitle}>
                            Manage your green stuff ready Manage asdfasdf your
                            green stuff ready Manage your green stuff ready
                            Manage your green stuff ready Manage your green
                            stuff ready
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

import React from "react";
import {
    Button,
    makeStyles,
    withStyles,
    NativeSelect,
    InputBase,
} from "@material-ui/core";

import back from "../assets/back.svg";
import profileImg from "../assets/transaction-profile-img.png";
import coinLabel from "../assets/coin-label.png";
import BlockChainHelper from "../helper/blockchainHelper";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
    },
    loginTop: {
        paddingTop: "28px",
        paddingLeft: "12px",
        alignSelf: "baseline",
    },
    backBtn: {
        fontSize: "14px",
        lineHeight: "17px",

        /* identical to box height */
        letterSpacing: "0.01em",

        /* primary/white */
        color: "#FBFBFB",
    },
    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderBottom: "2px solid #2B2B2B",
        margin: "1rem 2rem",
    },
    row: {
        display: "flex",
    },
    name: { fontSize: "20px", lineHeight: "24px" },
    subName: {
        fontSize: "10px",
        lineHeight: "12px",

        /* identical to box height */
        letterSpacing: "0.01em",
    },
    greenText: {
        color: "#3EFFA2",
        marginBottom: "20px",
        fontSize: "14px",
        lineHeight: "17px",
    },
    redText: {
        color: "#FF3838",
        marginBottom: "20px",
        fontSize: "14px",
        lineHeight: "17px",
    },
    num: { fontSize: "28.3077px", lineHeight: "34px" },
    payBtn: {
        alignSelf: "center",
        width: "300px",
        height: "50px",
        background: "#3EFFA2",
        boxShadow: "0px 4px 50px 2px rgba(62, 255, 162, 0.35)",
        borderRadius: "6px",
        margin: "42px 0 27px 0",
        fontSize: "24px",
        color: "#242424",
    },
});

const BootstrapInput = withStyles((theme) => ({
    root: {
        "label + &": {
            marginTop: theme.spacing(3),
            marginBottom: "12px",
        },
    },
    input: {
        height: "50px",
        width: "250px",
        borderRadius: "6px",
        backgroundColor: "#fbfbfb",
        // border: "1px solid #ced4da",
        fontSize: "24px",
        padding: "10px 26px 10px 12px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        "&:focus": {
            borderRadius: "6px",
            // borderColor: "#80bdff",
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
            backgroundColor: "#fbfbfb",
        },
        marginBottom: "34px",
    },
}))(InputBase);

const TransactionInit = () => {
    const c = useStyles();

    const [age, setAge] = React.useState("");
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const blockHelper = new BlockChainHelper();
    const mintToken = async (amount, fromAddr) => {
        const result = await blockHelper.mintToken(amount, fromAddr);
        if (result.success) {
            return true;
        }
        return false;
    };

    const handleResponse = async () => {
        const results = await mintToken(
            12,
            "tz1RGoWgci6h21xyEgfPJU9qkK4gpThiDN4n"
        );
        if (results) {
            window.location.href = "/success";
        }
    };

    const receiverId = localStorage.getItem("receiverId");
    console.log(receiverId);
    return (
        <div className={c.root}>
            <div className={c.loginTop}>
                <Button
                    className={c.backBtn}
                    onClick={() => window.history.back()}
                >
                    <img src={back} alt="back" />
                    <span>Go back</span>
                </Button>
            </div>
            <div className={c.content}>
                <img src={profileImg} alt="" />
                <div className={c.name}>Martina</div>
                <div className={c.subName}>Tranferring to Martina</div>
                <div className={c.greenText}>Choose commodity</div>
                <NativeSelect
                    id="demo-customized-select-native"
                    value={age}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                >
                    {/* <option aria-label="None" value="" /> */}
                    <option value="Petrol">Petrol</option>
                    <option value="Meat">Meat</option>
                    {/* <option value={30}>Thirty</option> */}
                </NativeSelect>
                <div className={c.greenText}>Enter Quantity</div>
                <BootstrapInput id="demo-customized-textbox" />
                <div className={c.row}>
                    <div className={c.redText}>
                        GRD to be deducted : <span className={c.num}>23</span>
                        <span>
                            <img
                                style={{ width: "10px" }}
                                src={coinLabel}
                                alt=""
                            />
                        </span>
                    </div>
                </div>
                <div className={c.row}>
                    <div className={c.greenText}>
                        Balance after deduction :{" "}
                        <span className={c.num}>153</span>
                        <span>
                            <img
                                style={{ width: "10px" }}
                                src={coinLabel}
                                alt=""
                            />
                        </span>
                    </div>
                </div>
            </div>
            <Button
                onClick={() => {
                    handleResponse();
                }}
                className={c.payBtn}
                variant="contained"
                color="primary"
            >
                Confirm and pay
            </Button>
        </div>
    );
};

export default TransactionInit;

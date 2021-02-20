/* eslint-disable */
import { Button, TextField } from "@material-ui/core";
import React from "react";
import BlockChainHelper from "../helper/blockchainHelper";

export default function BlockTester() {
    const blockHelper = new BlockChainHelper();

    const transferToken = async (amount, fromAddr, toAddr) => {
        const result = await blockHelper.transferToken(
            amount,
            fromAddr,
            toAddr
        );
        if (result.success) {
            alert("Major GG!");
        } else {
            alert("EPIC FAIL BLOCKCHAIN LMAO!");
        }
    };

    const mintToken = async (amount, fromAddr) => {
        const result = await blockHelper.mintToken(amount, fromAddr);
        if (result.success) {
            alert("Major GG!");
        } else {
            alert("EPIC FAIL BLOCKCHAIN LMAO!");
        }
    };

    return (
        <div>
            <form noValidate autoComplete="off">
                <TextField id="standard-basic" label="Standard" />
                <TextField id="filled-basic" label="Filled" variant="filled" />
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                />
            </form>
            <Button
                onClick={transferToken(
                    1,
                    "tz1RGoWgci6h21xyEgfPJU9qkK4gpThiDN4n",
                    "tz1eViSEkLDYcnf83ztwoFCfuiiGkHwxgzWQ"
                )}
                variant="contained"
                color="primary"
            >
                Transfer Tokens
            </Button>
        </div>
    );
}

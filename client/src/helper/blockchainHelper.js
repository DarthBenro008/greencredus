import { TezosNodeWriter, TezosParameterFormat } from "conseiljs";
var key_name = "alpha";
var key = require(`./${key_name}`);

class BlockChainHelper {
    constructor() {
        this.params = {
            wallet: key.publicKeyHash,
            address: "",
            tezosNode: "https://testnet.tezster.tech",
            contractAddress: "KT1AQqqKu29eC7hc6Q73unXMwgLCLPdMNo9T",
        };
    }
    async mintToken(amount, address) {
        console.log(address, amount);

        var keystore = key,
            amount = amount * 1000000,
            fee = 100000,
            storage_limit = 1000,
            gas_limit = 200000,
            entry_point = undefined,
            parameters = `(Right (Left (Right (Pair "${address}" ${amount}))))`,
            derivation_path = ""

        // TezosNodeWriter is responsible for writing in the Tezos Blockchain and costs GAS
        try {
            const result = await TezosNodeWriter.sendContractInvocationOperation(
                this.params.tezosNode,
                keystore,
                this.params.contractAddress,
                amount,
                fee,
                derivation_path,
                storage_limit,
                gas_limit,
                entry_point,
                parameters,
                TezosParameterFormat.Michelson
            );
            const resParams = {
                success: true,
                operationGroup: result.operationGroupID,
            };
            return resParams;
        } catch (e) {
            console.log(e.toString());
            const resParams = {
                success: false,
            };
            return resParams;
        }
    }

    async transferToken(amount, fromAddr, toAddr) {
        console.log(fromAddr, toAddr, amount);

        var keystore = key,
            amount = amount,
            fee = 1,
            storage_limit = 1000,
            gas_limit = 200000,
            entry_point = undefined,
            parameters = `(Right (Right (Right (Right (Pair ${amount} (Pair "${fromAddr}" "${toAddr}"))))))`,
            derivation_path = "";

        console.log(parameters);

        try {
            // TezosNodeWriter is responsible for writing in the Tezos Blockchain and costs GAS
            const result = await TezosNodeWriter.sendContractInvocationOperation(
                this.params.tezosNode,
                keystore,
                this.params.contractAddress,
                amount,
                fee,
                derivation_path,
                storage_limit,
                gas_limit,
                entry_point,
                parameters,
                TezosParameterFormat.Michelson
            );
            const resParams = {
                success: true,
                operationGroup: result.operationGroupID,
            };
            return resParams;
        } catch (e) {
            console.log(e.toString());
            const resParams = {
                success: false,
            };
            return resParams;
        }
    }
}

export default BlockChainHelper;

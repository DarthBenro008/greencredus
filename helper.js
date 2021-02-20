const conseiljssoftsigner = require("conseiljs-softsigner");

const faucetAccount = {};

async function initAccount() {
  const keyStore = await conseiljssoftsigner.KeyStoreUtils.restoreIdentityFromFundraiser(
    faucetAccount.mnemonic.join(" "),
    faucetAccount.email,
    faucetAccount.password,
    faucetAccount.pkh
  );
  console.log(`public key: ${keyStore.publicKey}`);
  console.log(`secret key: ${keyStore.secretKey}`);
  console.log(`hash key: ${keyStore.publicKeyHash}`);
}

initAccount();

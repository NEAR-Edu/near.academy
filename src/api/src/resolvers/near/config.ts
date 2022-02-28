/* @ts-ignore */
const contractName = 'meme-museum.testnet';

/* @ts-ignore */
module.exports = function getConfig(isServer = false) {
  let config = {
    networkId: "testnet",
    nodeUrl: "https://rpc.testnet.near.org",
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
    contractName,
  };

  if (process.env.REACT_APP_ENV === undefined) {
    config = {
      ...config,
      /* @ts-ignore */
      GAS: "200000000000000",
      DEFAULT_NEW_ACCOUNT_AMOUNT: "5",
      contractMethods: {
        changeMethods: ["create_meme", "add_meme"],
        viewMethods: ["get_meme_count", "get_meme_list"],
      },
    };
  }

  if (process.env.REACT_APP_ENV === "prod") {
    config = {
      ...config,
      networkId: "mainnet",
      nodeUrl: "https://rpc.mainnet.near.org",
      walletUrl: "https://wallet.near.org",
      helperUrl: "https://helper.mainnet.near.org",
      /* @ts-ignore */
      CONTRACT_NAME: "near",
    };
  }

  return config;
};
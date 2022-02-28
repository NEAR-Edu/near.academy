/* @ts-ignore */
const contractName = 'museum-nft.testnet';

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
      DEFAULT_NEW_ACCOUNT_AMOUNT: "1",
      contractMethods: {
        changeMethods: [	
        "new",
        "nft_mint",
        "nft_transfer",
        "nft_approve_account_id"
        ],
        viewMethods: ["get_token_ids", "nft_tokens"],
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
      nftConfig: "near",
    };
  }

  return config;
};
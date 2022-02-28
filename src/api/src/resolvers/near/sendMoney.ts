// const fs = require('fs');
import * as dotenv from 'dotenv'
import { Account, KeyPair, keyStores, Near, utils } from "near-api-js";

const getConfig = require('./config');

dotenv.config()

const { nodeUrl, networkId, contractName, contractMethods } = getConfig(true);

const credentials = {
  account_id: process.env.account_id,
  public_key: process.env.public_key,
  private_key: process.env.private_key
};

const keyStore = new keyStores.InMemoryKeyStore();

/* @ts-ignore */
keyStore.setKey(networkId, contractName, KeyPair.fromString(credentials.private_key));

const near = new Near({
  networkId, nodeUrl,
  headers: {},
  deps: { keyStore },
});

const { connection } = near;
const contractAccount = new Account(connection, contractName);
/* @ts-ignore */
contractAccount.addAccessKey = (publicKey) => contractAccount.addKey(publicKey, contractName, contractMethods.changeMethods, parseNearAmount('0.1'));
// const contract = new Contract(contractAccount, contractName, contractMethods);

// console.log(contract)

export async function sendMoney(receiver: string, amount: string) {
  const amountInYocto = utils.format.parseNearAmount(amount);
  const result = await contractAccount.sendMoney(receiver, amountInYocto)
  // console.log(result);
  return result;
}

// sendMoney('bob3.testnet', "1")

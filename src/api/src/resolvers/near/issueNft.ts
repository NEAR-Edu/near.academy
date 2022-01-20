// const fs = require('fs');
import * as dotenv from 'dotenv'
import { Account, Contract, KeyPair, keyStores, Near, utils } from 'near-api-js'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const getConfig = require('./nftConfig')

dotenv.config()

const { nodeUrl, networkId, contractMethods } = getConfig(true)
const contractName = 'test.museum-nft.testnet'

const credentials = {
  account_id: process.env.account_id,
  public_key: process.env.public_key,
  private_key: process.env.private_key,
}

const keyStore = new keyStores.InMemoryKeyStore()

/* @ts-ignore */
keyStore.setKey(networkId, contractName, KeyPair.fromString(credentials.private_key))

const near = new Near({
  headers: {},
  networkId,
  nodeUrl,
  deps: { keyStore },
})

const { connection } = near
const contractAccount = new Account(connection, contractName)

contractMethods.sender = contractAccount
/* @ts-ignore */
const contract = new Contract(contractAccount, contractName, contractMethods)

const tokenType = 'test'

export async function issueNftCertificate(username: string, tokenId: number, accountName: string) {
  /* @ts-ignore */
  // const r = await contract.nft_tokens({ "from_index": "0", "limit": "10000" })
  const now: string = Date.now().toString()

  const amountInYocto = utils.format.parseNearAmount('1')

  /* @ts-ignore */
  const receipt = await contract.nft_mint(
    {
      token_id: tokenId.toString(),
      receiver_id: accountName,
      owner_id: accountName,
      metadata: { media: 'https://near.academy/certificate/' + username, issued_at: now },
      token_type: tokenType,
    },
    300000000000000, // attached GAS (optional)
    amountInYocto, // attached deposit in yoctoNEAR
  )

  return receipt
}

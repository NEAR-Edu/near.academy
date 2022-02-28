<ChapterContainer>
<div>Chapter 2</div><div className="imgCheckedBox" />
</ChapterContainer>

<Difficulty>Difficulty: 2/5 | Estimated reading time: 5 min</Difficulty>

# Key Concepts of Web3
<Spacer />
We'll start by looking at the main components of Web3, it's a helpful reference to have when you write code.
<Spacer />

- Distributed ledger. The distributed ledger, or blockchain, is the backbone of the network. This is where states are publicly stored.
- Validator nodes. Validator nodes are servers that provide computation services and security to the network. In permissionless networks, **anyone is free to run a Validator node**, following a set of requirements that are specific to this network.

## Execution capabilities

Custom code is directly deployed to the blockchain and can be called by users. Validator nodes take care of the execution, and any interactions with the code are then saved on the blockchain.

Permissionless protocols allow anyone to use the network as they want: run a validator node, create an account and interact with the network. Users of these networks cannot be barred on account of geography, income, gender, orientation, or a host of other sociological and demographic factors. Value and digital assets can be transferred cross-border, quickly and efficiently, anywhere in the world. **The power of permissionless access cannot be overstated.**

Permissionless blockchains like NEAR use rules that are programmatically open and fair rather than subjectively imposed by a single entity. Everything is fully verifiable through the blockchain.

No central entity or government has the ability to shut down sites and services because these are operated through a network of independent participants via consensus.

## New Mental Models

A typical web application is programmed using a client–server structure. The user ("client") is provided services through an off-site server hosted by a third-party.

Applications are usually broken into logical chunks called "tiers", where every tier is assigned a role. Though many variations are possible, the most common structure is the three-tiered representation: presentation (front-end), application (back-end) and storage (database).

**Decentralized applications** (or **dApps**) follow the same structure overall. The only difference is that the back-end gets enhanced by connecting it to public Web3 infrastructure. The front-end and the storage can be integrated in dApps just like in any other Apps.

<Spacer />

In a dApp, security and access are provided by cryptography (public/private keys) rather than username and password or oAuth. This approach is also called **passwordless identification**. **Users keep their identity through dApps** rather than having a different one in each or rely on third-party identity management.

For users, access to the open web is based only on a private key, which is used to unlock all dApps and services on the blockchain.

Users access and interact with dApps with a web browser just like any other App; this makes it easy for them to switch. And dApps offer many improvements to the user experience:

<Spacer />

- Identification is done only once for access across dApps
- Ownership of personal data remains in users’ hands at all times
- Interactions are opt-in by default
- Payment and exchanges are handled just like any other action

<Spacer />

Behind the scenes, the framework connecting users with digital services is slightly different with a dApp. Consider all the possible aspects of an application that may be decentralized:

<Spacer />

- Backend software (application logic)
- Frontend software
- Data storage

## Backend (application logic)

The backend of a dApp is just the same as any other app, except that it’s **connected to the blockchain for at least some of its services**, like access control, storage of transactions and balances, or programmatic guarantee of agreements between users.

## Frontend (Web User Interface)

**The client-side interface of a dApp can use standard web technologies** (HTML, CSS, JavaScript, etc.). This allows a traditional web developer to use familiar tools, libraries, and frameworks.

Interactions with the blockchain, such as signing messages, sending transactions, and managing keys, are often conducted through the web browser via an extension such as the NEAR Wallet. It is also possible to create native mobile dApps.

## Data Storage

**Data storage can be handled the same in dApps as in other Apps**, with the extra ability to store information into the blockchain. That is handy when one wants to verifiably and permanently save actions or transactions.

Storing and distributing significant static assets on a blockchain would be inefficient as the cost would be too high. This is why images, videos, and resources of the application’s frontend web interface (HTML, CSS, JavaScript, etc.) are generally not stored on the blockchain itself.

Besides cloud databases and other centralized solutions, data can be stored on P2P platforms such as the InterPlanetary File System (IPFS); P2P storage is an excellent alternative while maintaining a trustless environment for the dApp.

## Check it for yourself with a Block Explorer!

The NEAR blockchain is public, so anyone can query it to get any data stored in it. Everyone can query the blockchain through a NEAR client, but a dedicated interface is easier to use, and is accessible by anyone regardless of whether they are running the NEAR software or not. Blockchain explorers, as these interfaces are called, can display blockchain data in a more user-friendly way and enhance the entries with off-chain data like current dollar value of a token.

<Spacer />

<BackgroundContainer>

<div class="exerciseTitle">Exercise</div>
To find the job offer on Decentrajob. Visit the <a target="_blank" rel="noopener noreferrer" href="https://explorer.testnet.near.org/">testnet explorer</a> and search for the “decentrajob.testnet” account. Here you see an overview of all transactions that happened on that account. Look for the latest transaction set\_open\_job called by museum\_director.testnet and click on the link that looks something like "G8xp5V6...". This will display the details about the transaction, including all arguments that were used to call the function. Select the correct answer.
</BackgroundContainer>

<Spacer />

<SubTitleMobile>Time to practice:</SubTitleMobile>

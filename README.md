Hardhat Smartcontract Lottery (Raffle) FCC
This repo has been updated to work with Sepolia over Goerli.

This is a section of the Javascript Blockchain/Smart Contract FreeCodeCamp Course.

⌨️ (13:41:02) Lesson 9: Hardhat Smart Contract Lottery

Full Repo

Hardhat Smartcontract Lottery (Raffle) FCC
Getting Started
Requirements
Quickstart
Typescript
Usage
Testing
Test Coverage
Deployment to a testnet or mainnet
Estimate gas cost in USD
Verify on etherscan
Typescript differences
Linting
Thank you!
This project is apart of the Hardhat FreeCodeCamp video.

Checkout the full blockchain course video here.

Getting Started
Requirements
git
You'll know you did it right if you can run git --version and you see a response like git version x.x.x
Nodejs
You'll know you've installed nodejs right if you can run:
node --version and get an ouput like: vx.x.x
Yarn instead of npm
You'll know you've installed yarn right if you can run:
yarn --version and get an output like: x.x.x
You might need to install it with npm or corepack
Quickstart
git clone https://github.com/PatrickAlphaC/hardhat-smartcontract-lottery-fcc
cd hardhat-smartcontract-lottery-fcc
yarn
Typescript
If you want to get to typescript and you cloned the javascript version, just run:

git checkout typescript
yarn 
Usage
Deploy:

yarn hardhat deploy
Testing
yarn hardhat test
Test Coverage
yarn hardhat coverage
Deployment to a testnet or mainnet
Setup environment variabltes
You'll want to set your SEPOLIA_RPC_URL and PRIVATE_KEY as environment variables. You can add them to a .env file, similar to what you see in .env.example.

PRIVATE_KEY: The private key of your account (like from metamask). NOTE: FOR DEVELOPMENT, PLEASE USE A KEY THAT DOESN'T HAVE ANY REAL FUNDS ASSOCIATED WITH IT.
You can learn how to export it here.
SEPOLIA_RPC_URL: This is url of the sepolia testnet node you're working with. You can get setup with one for free from Alchemy
Get testnet ETH
Head over to faucets.chain.link and get some tesnet ETH & LINK. You should see the ETH and LINK show up in your metamask. You can read more on setting up your wallet with LINK.

Setup a Chainlink VRF Subscription ID
Head over to vrf.chain.link and setup a new subscription, and get a subscriptionId. You can reuse an old subscription if you already have one.

You can follow the instructions if you get lost. You should leave this step with:

A subscription ID

Your subscription should be funded with LINK

Deploy

In your helper-hardhat-config.js add your subscriptionId under the section of the chainId you're using (aka, if you're deploying to sepolia, add your subscriptionId in the subscriptionId field under the 11155111 section.)

Then run:

yarn hardhat deploy --network sepolia
And copy / remember the contract address.

Add your contract address as a Chainlink VRF Consumer
Go back to vrf.chain.link and under your subscription add Add consumer and add your contract address. You should also fund the contract with a minimum of 1 LINK.

Register a Chainlink Keepers Upkeep
You can follow the documentation if you get lost.

Go to keepers.chain.link and register a new upkeep. Choose Custom logic as your trigger mechanism for automation. Your UI will look something like this once completed:

Keepers

Enter your raffle!
You're contract is now setup to be a tamper proof autonomous verifiably random lottery. Enter the lottery by running:

yarn hardhat run scripts/enter.js --network sepolia
Estimate gas cost in USD
To get a USD estimation of gas cost, you'll need a COINMARKETCAP_API_KEY environment variable. You can get one for free from CoinMarketCap.

Then, uncomment the line coinmarketcap: COINMARKETCAP_API_KEY, in hardhat.config.js to get the USD estimation. Just note, everytime you run your tests it will use an API call, so it might make sense to have using coinmarketcap disabled until you need it. You can disable it by just commenting the line back out.

Verify on etherscan
If you deploy to a testnet or mainnet, you can verify it if you get an API Key from Etherscan and set it as an environemnt variable named ETHERSCAN_API_KEY. You can pop it into your .env file as seen in the .env.example.

In it's current state, if you have your api key set, it will auto verify sepolia contracts!

However, you can manual verify with:

yarn hardhat verify --constructor-args arguments.js DEPLOYED_CONTRACT_ADDRESS
Typescript differences
.js files are now .ts
We added a bunch of typescript and typing packages to our package.json. They can be installed with:
yarn add @typechain/ethers-v5 @typechain/hardhat @types/chai @types/node ts-node typechain typescript
The biggest one being typechain
This gives your contracts static typing, meaning you'll always know exactly what functions a contract can call.
This gives us factories that are specific to the contracts they are factories of. See the tests folder for a version of how this is implemented.
We use imports instead of require. Confusing to you? Watch this video
Add tsconfig.json
Linting
To check linting / code formatting:

yarn lint
or, to fix:

yarn lint:fix
Thank you!

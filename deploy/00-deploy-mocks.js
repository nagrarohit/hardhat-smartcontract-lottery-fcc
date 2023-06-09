const { network } = require("hardhat")
const { developementChains } = require("../helper-hardhat.config")

const BASE_FEE = ethers.utils.parseEther("0.25") //it costs 0.25 link per request
const GAS_PRICE_LINK = 1e9 //calculated value based on the gas price of the chain
module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const args = [BASE_FEE, GAS_PRICE_LINK]

    if (developementChains.includes(network.name)) {
        log("local network detected deploying mocks...")
        // deploy a mock vrfcoordinator...
        await deploy("VRFCoordinatorV2Mock", {
            from: deployer,
            log: true,
            args: args,
        })
        log("mocks deployed")
        log("---------------------------------------------------")
    }
}
module.exports.tags = ["all", "mocks"]

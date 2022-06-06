const { task, types } = require("hardhat/config");
require("@nomiclabs/hardhat-web3");

task("balance", "Prints an account's balance")
  .addParam("account", "The account's address")
  .addOptionalParam("greeting", "The greeting to print before balance", "Hi, there")
  .addOptionalParam("times", "The number of times to print the greeting", 1, types.int)
  .setAction(async (taskArgs) => {

    for (let i = 0; i < taskArgs.times; i++) {
      console.log(taskArgs.greeting);
    }

    const account = web3.utils.toChecksumAddress(taskArgs.account);
    const balance = await web3.eth.getBalance(account);

    console.log(web3.utils.fromWei(balance, "ether"), "ETH");
  });

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545"
    }
  }
};

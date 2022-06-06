const { task } = require("hardhat/config");
require("@nomiclabs/hardhat-web3");

task("balance", "Prints an account's balance")
  .addParam("account", "The account's address")
  .addOptionalParam("greeting", "The greeting to print before balance", "Hi, there")
  .setAction(async (taskArgs) => {
    console.log(taskArgs.greeting);

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

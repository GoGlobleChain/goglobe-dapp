var Exchange = artifacts.require("./Exchange.sol");

module.exports = function (deployer) {
  deployer.deploy(Exchange,1,100);
};

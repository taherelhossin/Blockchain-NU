var MyTestContract = artifacts.require("./MyTestContract.sol");

module.exports = function(deployer) {
  deployer.deploy(MyTestContract);
};

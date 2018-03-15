var Ratings = artifacts.require("./Rating.sol");

module.exports = function(deployer) {
  deployer.deploy(Ratings,['El-3ar', 'El-keef', 'Inception']/*, {gas: 6700000}*/);
};
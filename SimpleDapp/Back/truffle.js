const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');

// First read in the secrets.json to get our mnemonic
let secrets;
let mnemonic;
if (fs.existsSync('secrets.json')) {
  secrets = JSON.parse(fs.readFileSync('secrets.json', 'utf8'));
  mnemonic = secrets.mnemonic;
} else {
  console.log('No secrets.json found. If you are trying to publish EPM ' +
              'this will fail. Otherwise, you can ignore this message!');
  mnemonic = '';
}

module.exports = {
  networks:{
    development:{
      host:"localhost",
      port:8545,
      network_id:'*'
    },
    ropsten: {
      provider: new HDWalletProvider(mnemonic, 'https://ropsten.infura.io'),
      network_id: '3',
      gas: 4000000,
    },
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

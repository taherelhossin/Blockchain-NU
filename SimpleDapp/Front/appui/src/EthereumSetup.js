import Web3 from 'web3';

window.addEventListener('load', function () {
    if (typeof window.web3 !== 'undefined') {
        console.log('Web3 Detected! ' + window.web3.currentProvider.constructor.name)
        window.web3 = new Web3(window.web3.currentProvider);
    } else {
        console.log('No Web3 Detected... using HTTP Provider')
        window.web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io"));
    }
}) 


let ratingABI=[{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"ratingsReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"movieList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"movieNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"name":"movie","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"movie","type":"bytes32"}],"name":"voteForMovie","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
let ratingAddress='0x39d63f0c68bbc666dd23e55c91847f77eb332153';
window.web3.eth.defaultAccount = window.web3.eth.accounts[0]


const ratingContract=window.web3.eth.contract(ratingABI).at(ratingAddress);
export {ratingContract};
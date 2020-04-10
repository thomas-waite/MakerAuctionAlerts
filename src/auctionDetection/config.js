const { ethers } = require('ethers');
const { keccak256, toBN } = require('web3-utils');

// value 
const decimals = toBN(1000000000000000000); //1e18

// events
const kickTopic = ethers.utils.id('Kick(uint256,uint256,uint256,uint256,address,address)')
const flipEthAFilter = {
    flipEthAContractAddress: '0xB40139Ea36D35d0C9F6a2e62601B616F1FfbBD1b',
    kickTopic,
};

const transferTopic = ethers.utils.id('Transfer(address,address,uint256)')
const transferNonIndexedTypes = ['uint256']
const transferIndexedTypes = ['address', 'address'];
const daiTransferFilter = {
    address: '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa',
    topics: [ transferTopic ]
};

module.exports = {
    decimals,
    transferTopic,
    transferIndexedTypes,
    transferNonIndexedTypes,
    daiTransferFilter
}
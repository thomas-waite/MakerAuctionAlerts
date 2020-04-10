const { ethers } = require('ethers');
const { keccak256, toBN } = require('web3-utils');

const { mainnetDAI, kovanDAI, mainnetFlipEthA } = require('../contractAddresses');

// value 
const decimals = toBN(1000000000000000000); //1e18

// events
const kickTopic = ethers.utils.id('Kick(uint256,uint256,uint256,uint256,address,address)')
const flipEthAFilter = {
    address: mainnetFlipEthA,
    topics: [ kickTopic ],
};

const transferTopic = ethers.utils.id('Transfer(address,address,uint256)')
const transferNonIndexedTypes = ['uint256']
const transferIndexedTypes = ['address', 'address'];
const daiTransferFilter = {
    address: mainnetDAI,
    topics: [ transferTopic ]
};

module.exports = {
    decimals,
    transferTopic,
    transferIndexedTypes,
    transferNonIndexedTypes,
    daiTransferFilter,
    flipEthAFilter,
}
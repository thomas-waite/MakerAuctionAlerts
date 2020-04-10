const BN = require('bn.js');
const ethers = require('ethers');

const { decimals, transferNonIndexedTypes, daiTransferFilter } = require('./config');

function uint256Decode(data) {
    const dataBN = new BN(data.slice(2), 16);
    return dataBN.div(decimals).toString();
}

function detectFlipEthA(network, callback, ...args) {
    console.log({ args });
    const provider = ethers.getDefaultProvider(network);

    provider.on(daiTransferFilter, async (log) => {
        const daiTransfer = uint256Decode(log.data);
        const messageBody = `Dai transfer value: ${daiTransfer}`;
        console.log({ messageBody });
        callback(messageBody, ...args);
    });
}

module.exports = { 
    detectFlipEthA
}

const BN = require('bn.js');
const ethers = require('ethers');
const web3EthAbi = require('web3-eth-abi');

const { decimals, transferNonIndexedTypes, daiTransferFilter } = require('./config');
const { sendSMS } = require('../notification/sendSMS');

const provider = ethers.getDefaultProvider('kovan');

function uint256Decode(data) {
    const dataBN = new BN(data.slice(2), 16);
    return dataBN.div(decimals).toString();
}

provider.on(daiTransferFilter, async (log) => {
    const daiTransfer = uint256Decode(log.data);
    console.log({ daiTransfer });
    sendSMS(daiTransfer)
});

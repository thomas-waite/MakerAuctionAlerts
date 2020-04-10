const BN = require('bn.js');
const ethers = require('ethers');
const web3EthAbi = require('web3-eth-abi');

const { decimals, transferNonIndexedTypes, daiTransferFilter } = require('./config');
const { sendSMS } = require('../notification/sendSMS');
const { bot, chatId } = require('../notification/telegramBot');

const provider = ethers.getDefaultProvider('mainnet');

function uint256Decode(data) {
    const dataBN = new BN(data.slice(2), 16);
    return dataBN.div(decimals).toString();
}

const telegram = true;
const SMS = false;

provider.on(daiTransferFilter, async (log) => {
    const daiTransfer = uint256Decode(log.data);
    console.log({ daiTransfer });
    console.log({ chatId });
    const messageBody = `Dai transfer value: ${daiTransfer}`;
    
    if (telegram) {
        bot.sendMessage(chatId, messageBody);
    }

    if (SMS) {
        sendSMS(messageBody)
    }
});

const { bot } = require('../bots/telegramAuctionBot');

function sendTelegramMessage(messageBody, chatId) {
    bot.sendMessage(chatId, messageBody)
};

module.exports = {
    sendTelegramMessage
}
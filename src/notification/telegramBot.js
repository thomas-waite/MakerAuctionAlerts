const dotenv = require('dotenv');
const TelegramBot = require('node-telegram-bot-api');

dotenv.config();
const BOT_TOKEN = process.env.BOT_TOKEN;

const bot = new TelegramBot(BOT_TOKEN, { polling: true });

let chatId;

bot.onText(/\start/, (msg) => {
    chatId = msg.chat.id;
    console.log({ chatId });
    bot.sendMessage(
        chatId,
        `Welcome! This bot will let you know when
    MakerDAO flip auctions start for various collateral types. 
    
    Which collateral would you like notifications for?`,
        {
            reply_markup: {
                keyboard: [['ETH-A'], ['BAT-A']],
            },
        },
    );
});


module.exports = {
    bot,
    chatId,
};

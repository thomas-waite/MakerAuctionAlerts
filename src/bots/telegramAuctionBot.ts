import * as dotenv from 'dotenv';
import * as TelegramBot from 'node-telegram-bot-api';

dotenv.config();
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;

export const bot: TelegramBot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });

let chatId: number;

bot.onText(/\/start/, (msg) => {
    chatId = msg.chat.id;
    console.log({ chatId });
    bot.sendMessage(
        chatId,
        `Welcome! This bot will let you know when
    MakerDAO flip auctions start for various collateral types. 
    
    Which collateral would you like notifications for?`,
        {
            reply_markup: {
                keyboard: [['ETH-A' as any], ['BAT-A' as any]],
            },
        },
    );
});


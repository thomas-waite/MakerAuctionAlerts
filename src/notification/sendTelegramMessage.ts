import { bot } from '../bots/telegramAuctionBot';

export default function sendTelegramMessage(messageBody: string, chatId: number) {
    bot.sendMessage(chatId, messageBody)
};

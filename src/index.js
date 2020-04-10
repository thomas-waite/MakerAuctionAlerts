const dotenv = require('dotenv');
const fetch = require('node-fetch');

const { bot } = require('./bots/telegramAuctionBot');
const { sendSMS } = require('./notification/sendSMS');
const { sendTelegramMessage } = require('./notification/sendTelegramMessage');
const { detectFlipEthA } = require('./auctionDetection/detectFlipEthA');

dotenv.config();

class AuctionAlerts {
    /**
     * Setup the auction alert service, by setting the network to listen to and the
     * alert/notification services required
     * @param {*} alertService
     * @param {*} network
     */
    constructor(alertService, network, chatID) {
        this.validateInputs(alertService, network);
        this.config = {
            network,
            alertService,
            chatID
        };
    }

    async start() {
        if (this.config.alertService === 'telegram') {
            await this.runTelegramBot(this.config.chatID);
        }

        if (this.config.alertService === 'sms') {
            await this.runSMSService();
        }
    }

    validateInputs(alertService, network) {
        const supportedNetworks = ['mainnet', 'kovan'];
        const supportedAlertServices = ['sms', 'telegram'];

        if (!supportedAlertServices.includes(alertService)) {
            throw new Error('Alert service must be one of: sms, telegram');
        }

        if (!supportedNetworks.includes(network)) {
            throw new Error('Network must be one of: mainnet, kovan');
        }
    }

    async runTelegramBot(chatID) {
        detectFlipEthA(this.network, sendTelegramMessage, chatID)
    }

    async runSMSService() {
        detectFlipEthA(this.network, sendSMS);
    }
}

const alerts = new AuctionAlerts('telegram', 'mainnet', 799934445);
alerts.start()
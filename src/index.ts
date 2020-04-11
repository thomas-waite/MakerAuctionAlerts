import * as dotenv from 'dotenv';
import sendSMS from'./notification/sendSMS';
import sendTelegramMessage from './notification/sendTelegramMessage';
import detectFlipEthA from './auctionDetection/detectFlipEthA';

dotenv.config();
const [alertServiceArg, networkArg, chatIdArg] = process.argv.slice(2);

export default class AuctionAlerts {
    public config: any;

    /**
     * Setup the auction alert service, by setting the network to listen to and the
     * alert/notification services required
     * @param {*} alertService
     * @param {*} network
     */
    constructor(public alertService: string, public network: string, public chatID: string) {
        this.validateInputs(alertService, network);
        this.config = {
            network,
            alertService,
            chatID: parseInt(chatID)
        };
    }

    public async start() {
        if (this.config.alertService === 'telegram') {
            await this.runTelegramBot(this.config.chatID);
        }

        if (this.config.alertService === 'sms') {
            await this.runSMSService();
        }
    }

    private validateInputs(alertService: string, network: string): void {
        const supportedNetworks = ['mainnet', 'kovan'];
        const supportedAlertServices = ['sms', 'telegram'];

        if (!supportedAlertServices.includes(alertService)) {
            throw new Error('Alert service must be one of: sms, telegram');
        }

        if (!supportedNetworks.includes(network)) {
            throw new Error('Network must be one of: mainnet, kovan');
        }
    }

    private async runTelegramBot(chatID: number): Promise<void> {
        detectFlipEthA(this.network, sendTelegramMessage, chatID)
    }

    private async runSMSService(): Promise<void> {
        detectFlipEthA(this.network, sendSMS);
    }
}

const alerts: AuctionAlerts = new AuctionAlerts(alertServiceArg, networkArg, chatIdArg);
alerts.start()
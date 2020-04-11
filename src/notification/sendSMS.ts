import * as dotenv from 'dotenv';

dotenv.config();

const TWILIO_SID = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioSendNumber = process.env.SMS_SEND_NUM;
const receiveNum = process.env.SMS_RECEIVE_NUM;

const client = require('twilio')(TWILIO_SID, authToken);

export default function sendSMS(messageBody: string): void {
    client.messages
        .create({
            body: messageBody,
            from: twilioSendNumber,
            to: receiveNum,
        })
        .then((message: any) => console.log(message.sid));
}

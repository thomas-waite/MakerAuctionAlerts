import * as dotenv from 'dotenv';

dotenv.config();

const accountSid = process.env.SID;
const authToken = process.env.AUTH_TOKEN;
const twilioSendNumber = process.env.SEND_NUM;
const receiveNum = process.env.RECEIVE_NUM;

const client = require('twilio')(accountSid, authToken);

export default function sendSMS(messageBody: string): void {
    client.messages
        .create({
            body: messageBody,
            from: twilioSendNumber,
            to: receiveNum,
        })
        .then((message: any) => console.log(message.sid));
}

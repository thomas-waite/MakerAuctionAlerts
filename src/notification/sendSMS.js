const dotenv = require('dotenv');

dotenv.config();

const accountSid = process.env.SID;
const authToken = process.env.AUTH_TOKEN;
const twilioSendNumber = process.env.SEND_NUM;
const receiveNum = process.env.RECEIVE_NUM;

const client = require('twilio')(accountSid, authToken);

function sendSMS(value) {
    client.messages
        .create({
            body: `Dai transfer: ${value}`,
            from: twilioSendNumber,
            to: receiveNum,
        })
        .then((message) => console.log(message.sid));
}

module.exports = {
    sendSMS
}
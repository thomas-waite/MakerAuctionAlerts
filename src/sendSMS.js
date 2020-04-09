const dotenv = require('dotenv');

dotenv.config();

const accountSid = process.env.SID;
const authToken = process.env.AUTH_TOKEN;
const twilioSendNumber = process.env.SEND_NUM;
const receiveNum = process.env.RECEIVE_NUM;

const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
    body: 'Test',
    from: twilioSendNumber,
    to: receiveNum,
  })
  .then((message) => console.log(message.sid));

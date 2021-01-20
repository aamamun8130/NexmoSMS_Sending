const Vonage = require('@vonage/server-sdk');

const vonage = new Vonage({
  apiKey: 'b8bb5128',
  apiSecret: '618DITlZy7CzgcVW'
})
let from = 'Vonage APIs';
let to = '2482576586';
let text = "👋Hello Testing Msg from A. Rahman";

vonage.message.sendSms(from, to, text, {
  type: "unicode"
}, (err, responseData) => {
  if (err) {
    console.log(err);
  } else {
    if (responseData.messages[0]['status'] === "0") {
      console.log("Message sent successfully.");
    } else {
      console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
    }
  }
})
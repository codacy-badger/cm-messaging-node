import {MessageApiClient} from "./lib";

// Get your product token at CM.com.
const yourProductToken = "";
const myMessageApi = new MessageApiClient(yourProductToken);

const result = myMessageApi.SendTextMessage("0031612345678", "TestSender", "Hello world?!");

result.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
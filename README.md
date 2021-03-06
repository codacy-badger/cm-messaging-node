## cm-messaging-node: A helper library to send text messages.

[![NPM](https://nodei.co/npm/cm-messaging-node.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/cm-messaging-node/)

[![Build Status](https://travis-ci.org/EricSmekens/cm-messaging-node.svg?branch=master)](https://travis-ci.org/EricSmekens/cm-messaging-node)
[![Codacy](https://api.codacy.com/project/badge/grade/3c7f5de6ce734762981d3e689de7b941)](https://www.codacy.com/project/EricSmekens/cm-messaging-node)

Want to send text-messages in your Node.js application? Then you are at the right place.

The package is currently in beta, but if you want to get all the functionalities, go to: [CM.com API Docs](https://docs.cmtelecom.com/bulk-sms-api/v1.0)


### Usage
#### Node.JS
First, run `npm install cm-messaging-node`. Then, in your source file:
```javascript
const messagingApi = require("cm-messaging-node");

// Get your product token at CM.com.
const yourProductToken = "";
const myMessageApi = new messagingApi.MessageApiClient(yourProductToken);

const result = myMessageApi.SendTextMessage("00316012345678", "TestSender", "Hello world?!");

result.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});
```

### License
cm-messaging-node is under the MIT license. See LICENSE file.

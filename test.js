"use strict";

const fs = require("fs");
const strategies = require("./strategies");
const executions = require("./executions");

const { Spot } = require("@binance/connector")

let rawAPICred = fs.readFileSync("config.json", "utf8");
let apiCred = JSON.parse(rawAPICred);
const client = new Spot(apiCred['apiKeyValue'], apiCred['secretKeyValue'], { baseURL: 'https://testnet.binance.vision'});


const callbacks = {
    open: () => client.logger.log('open'),
    close: () => client.logger.log('closed'),
    message: (data) => {
      strategies.checkPriceLower(data, 420.3)                               // This should be fed in from config file
      .then((msg) => { executions.teleAlert(apiCred["teleChatId"], msg)})   // This too
      .catch(() => {})

    }
  };
  const aggTrade = client.tickerWS('bnbusdt', callbacks)
  

  setTimeout(() => client.unsubscribe(aggTrade), 3000)                      // To implement off button


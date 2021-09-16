"use strict"

const TelegramBot = require('node-telegram-bot-api');
const fs = require("fs")

module.exports = {
    teleAlert : teleAlert
}

let rawAPICred = fs.readFileSync("config.json", "utf8");
let apiCred = JSON.parse(rawAPICred);

const bot = new TelegramBot(apiCred["teleBotKey"])

function teleAlert(chatId, msg){
    bot.sendMessage(chatId, msg);
};

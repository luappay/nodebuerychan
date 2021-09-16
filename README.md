# nodeBueryChan

# Using Telegram Bot To Alert Price Changes On Binance

With the recent removal of the Binance app from the app store of some countries, I thought it will be good to create a simple price alert bot for myself instead. 

# What does this do?

The bot queries price from Binance API and alerts (via a Telegram Bot) if the price meets the condition set. 

This is a simple version 1 that allows anyone to easily build on top of it. Scroll down for further elaboration.

# Setting up

### Dependencies:

[Binance Connector](https://github.com/binance/binance-connector-node), [Telegram Bot Library](https://github.com/yagop/node-telegram-bot-api)

### Configurations:

The configurations you will need are;

- apiKey - Binance API key
- secretKey - Binance API secret key
- teleBotKey - The token for the Telegram bot, which is generated from [Botfather](https://core.telegram.org/bots/)
- teleChatId - Telegram chat ID. You can find your chat ID by looking at the URL when you use Telegram Web

The config should look something like this;

```json
{
    "apiKey" : "apiKeyValue",
    "secretKey" : "secretKeyValue",
    "teleBotKey": "teleBotKeyVal",
    "teleChatId": "chatId"
}
```

### To run:

Enter the folder and call test.js

```powershell
node test.js
```

# How does it work?

There are 3 components to the implementation;

- config.json - Configuration file
- test.js - Main entry point
- strategies.js - Hypotheses/Strategy to test/apply
- execution.js - Next steps to apply when certain condition clears

The goal is to decouple each component as much as possible such that they can be run independently and easily interchangeable.
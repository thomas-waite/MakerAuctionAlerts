# __Work in progress__

## MakerAuctionAlerts

This is a basic user alerting system for MakerDAO collateral auction events. It notifies the user, via a customisable variety of communication channels, when a CDP has been liquidated and the auction for the collateral (a __flip__ auction) has started. Various details about the auction are provided to the user. 

Communication channels currently supported are: SMS messaging, Telegram chat.

### To get started
1. Clone the repo
2. Run `yarn install`
3. Rename `.env.example` to `.env` and fill in the various variables
4. Run:

1) To get an idea of the required arguments and flags:
```
bash start.sh -h
```

2) To start the auction alert service:
```
bash start.sh -a ${alertService} -c ${network} -t ${telegramBotChatID}
```

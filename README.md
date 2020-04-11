# __Work in progress__

## MakerAuctionAlerts

This is a basic user alerting system for MakerDAO collateral auction events. It notifies the user, via a customisable variety of communication channels, when a CDP has been liquidated and the auction for the collateral (a __flip__ auction) has started. Various details about the auction are provided to the user. 

Communication channels currently supported are: SMS messaging, Telegram chat.

### To get started
1. Clone the repo
2. Run `yarn install`
3. Rename `.env.example` to `.env` and fill in the various variables
4. Run `bash src/start.sh -a ${alertService} -c ${network} -t ${telegramBotChatID}`. Run `bash src/start.sh -h` to get descriptions of these required arguments and acceptable values

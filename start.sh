#!/usr/bin/env bash
set -e
set -u
set -o pipefail


while getopts "a:c:t:h" opt; do
  case ${opt} in
    a )
      alertService=$OPTARG
      ;;
    c )
      chain=$OPTARG
      ;;
    t )
      chatId=$OPTARG
      ;;
    h )
        echo "Usage: "
        echo "    -a    Alert service: sms or telegram"
        echo "    -c:   Network: mainnet or kovan"
        echo "    -t:   Telegram bot chat Id"
        ;;
    : )
        echo "Invalid option: $OPTARG requires an argument" 1>&2
        ;; 
    \? ) echo "Usage: cmd [-a] [-c] [-t]"
      ;;
  esac
done
shift $((OPTIND -1))

echo "Success, searching for auctions..."
yarn ts-node src/index.ts $alertService $chain $chatId



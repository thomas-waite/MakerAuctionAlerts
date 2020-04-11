#!/usr/bin/env bash
set -e
set -u
set -o pipefail


while getopts "a:c:t:h" opt; do
  case ${opt} in
    a )
      alertService=$OPTARG
      echo "a flag: " $alertService
      ;;
    c )
      chain=$OPTARG
      echo "c flag: " $chain
      ;;
    t )
      chatId=$OPTARG
      echo "t flag: " $chatId
      ;;
    h )
        echo "Usage: "
        echo "    -a    Alert service: sms or telegram"
        echo "    -c:   Network: mainnet or kovan"
        ehco "    -t:   Telegram bot chat Id"
        ;;
    : )
        echo "Invalid option: $OPTARG requires an argument" 1>&2
        ;; 
    \? ) echo "Usage: cmd [-a] [-c] [-t]"
      ;;
  esac
done
shift $((OPTIND -1))

yarn ts-node src/index.ts $alertService $chain $chatId



#!/bin/bash

# Exit script as soon as a command fails.
set -o errexit

# Start searching for new auction events
cd ./src/auctionDetection
node detectFlipEthA.js


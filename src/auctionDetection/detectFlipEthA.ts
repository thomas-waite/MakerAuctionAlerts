import * as BN from 'bn.js';
import { ethers } from 'ethers';

import { decimals, daiTransferFilter } from './config';

type callbackFn = (messageBody: string, ...args: any[]) => void;

export default function detectFlipEthA(network: string, callback: callbackFn, ...args: any[]): void {
    console.log({ args });
    const provider = ethers.getDefaultProvider(network);

    provider.on(daiTransferFilter, async (log) => {
        const daiTransfer = uint256Decode(log.data);
        const messageBody = `Dai transfer value: ${daiTransfer}`;
        console.log({ messageBody });
        callback(messageBody, ...args);
    });
}

function uint256Decode(data: string): string {
    const dataBN = new BN(data.slice(2), 16);
    return dataBN.div(decimals).toString();
}


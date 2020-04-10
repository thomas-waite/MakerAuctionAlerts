import * as BN from 'bn.js';
import { ethers } from 'ethers';
import { toBN } from 'web3-utils';

import { mainnetDAI, mainnetFlipEthA } from '../contractAddresses';

// value 
export const decimals: BN = toBN(1000000000000000000); //1e18

// events
const kickTopic: string = ethers.utils.id('Kick(uint256,uint256,uint256,uint256,address,address)')
export const flipEthAFilter: object = {
    address: mainnetFlipEthA,
    topics: [ kickTopic ],
};

export const transferTopic: string = ethers.utils.id('Transfer(address,address,uint256)')
export const transferNonIndexedTypes: string[] = ['uint256']
export const transferIndexedTypes: string[] = ['address', 'address'];
export const daiTransferFilter: object = {
    address: mainnetDAI,
    topics: [ transferTopic ]
};
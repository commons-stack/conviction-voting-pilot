import { getNetworkType, isLocalOrUnknownNetwork } from './lib/web3-utils'
import { getDefaultChain } from './local-settings'

const networks = {
  mainnet: {
    chainId: 1,
    ensRegistry: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    defaultEthNode:
      'wss://mainnet.infura.io/ws/v3/fb8cf9d97ab44df7b4a268b282c04803',
    defaultSubgraphUrl:
      'https://api.thegraph.com/subgraphs/name/1hive/aragon-conviction-voting-mainnet',
    name: 'Mainnet',
    orgAddress: '0xaAf56C0D604dDB88bBe451ae0db4580Ca3D49c0A',
    type: 'mainnet',
  },
  rinkeby: {
    chainId: 4,
    ensRegistry: '0x98df287b6c145399aaa709692c8d308357bc085d',
    defaultEthNode: 'wss://rinkeby.eth.aragon.network/ws',
    defaultSubgraphUrl:
      'https://api.thegraph.com/subgraphs/name/evalir/aragon-cv-rinkeby-staging',
    name: 'Rinkeby',
    orgAddress: '0xb36b8319f0182653eabb9fec0c57c0df5634740d',
    type: 'rinkeby',
  },
  xdai: {
    chainId: 100,
    ensRegistry: '0xaafca6b0c89521752e559650206d7c925fd0e530',
    defaultEthNode: 'https://xdai.poanetwork.dev/',
    defaultSubgraphUrl:
      'https://api.thegraph.com/subgraphs/name/1hive/aragon-conviction-voting-xdai',
    name: 'xDai',
    orgAddress: '0xaa628d99357283aaa035f757e1a8c5f9a94e0798',
    type: 'xdai',
  },
}

function getNetworkInternalName(chainId = getDefaultChain()) {
  return isLocalOrUnknownNetwork(chainId) ? 'local' : getNetworkType(chainId)
}

export function getNetwork(chainId = getDefaultChain()) {
  return networks[getNetworkInternalName(chainId)]
}

export function getAvailableNetworks() {
  return Object.entries(networks).map(([key, { chainId, name, type }]) => ({
    chainId,
    name,
    type,
  }))
}

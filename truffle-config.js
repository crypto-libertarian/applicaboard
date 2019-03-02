var HDWalletProvider = require('truffle-hdwallet-provider')

var token = 'b99bfb39383f41af95a96c8e65c60218'

var mnemonic = 'pulse reason provide violin tissue grape ' +
               'verify fiber deliver asset harvest powder'

function endpoint(network) {
  return 'https://' + network + '.infura.io/' + token
}

function provider(network) {
  return new HDWalletProvider(mnemonic, endpoint(network))
}

module.exports = {
  contracts_build_directory: './artifacts',

  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',
    },

    ropsten: {
      provider: provider('ropsten'),
      network_id: 3,
    },
  },
}

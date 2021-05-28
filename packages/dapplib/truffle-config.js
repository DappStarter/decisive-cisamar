require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remain honey inflict arena flame tooth'; 
let testAccounts = [
"0xb672a407211fd9bd3a7241f53cb192c60b422f524b281e77282fa701df37635c",
"0x126a75ee60b678ec5776dc228d7639bde6b8ffaff98a37d4f69b051013079a30",
"0xd931abb1e6732c9058104e9b12a706519fb64e1175e58b145b3c13660eadb23c",
"0xc99b67265ebcb30bfd5c309a58334c4e7be157d1e96187c57d1dc5ab26e1eb39",
"0xab1d709212aa9b04a456e59df181f12ea24c5aacb4670b6db16ae2a25b94b868",
"0xc2bc2fe3f8369007302f33789f659a0f4b8310bf04ff1d1858226f63d4d3d0af",
"0xd7615f9f188e8154f223b361dfd5532caa47ab60c7670b650c1196c50214b2d6",
"0x689dcad2016205e1a17b93069f121ae652c1f265d23d1e38eabf4a3dcef2b8cf",
"0x99f728ca95ac98ccda00d87f68476fe77bf0514895fa8c547c62ea2a4e37761d",
"0x04251092e934609eece15b70ef82ceb8d2711793ed5639dd412731c342ca314a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


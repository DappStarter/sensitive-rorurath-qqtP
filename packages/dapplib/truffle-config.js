require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict clock orphan spray educate robot net purity hunt neck frame seat'; 
let testAccounts = [
"0x3956ee2d876c67ea18a1cf144e9f5a15ada3fcdee14dd92d1bf551a199aaacee",
"0x6ce2782af617a00e74789b2eba7ac4c912f4f1979a59f00422ba9b99ac1fa9da",
"0xd2437bdb33c2001ac31a1dee16a5bf77e43728ef56bad540350bab9c56d36968",
"0x6c51e87aed3077f935967088c9492ae84b2f3fa1d6088cf28ab62207def1810d",
"0x31c8d1d418b3026f2529476ca76885a78808c3f28cf0894c42874fe5a787ac2c",
"0x8e4218874b9ad172df62072cd4754e3f718793feab213d4165bf397756b130c3",
"0x2a7b938971b096d6c9b086142dc070572a075d70fe8aaed650f503766dd3244d",
"0x199bfe23b9a634bb78af1dd67d28e4807b9b9b11984717b2fe90ff401a6fc3ed",
"0x3449f76b8ebca86a148b5440dc8192de62fe45c14a5d41a446f91f4768e46e9d",
"0xa05ac6cfd11be7c47aa5ce0f57b17922a193656bbea73166468111ad1465d216"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


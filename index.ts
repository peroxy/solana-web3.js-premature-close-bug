import {Connection, PublicKey} from "@solana/web3.js";

const connection = new Connection(
    "https://api.mainnet-beta.solana.com");

const promises = [];
for (let i = 0; i < 26; i++) {
    promises.push(connection.getAccountInfo(new PublicKey('Cfuy5T6osdazUeLego5LFycBQebm9PP3H7VNdCndXXEN')));
}
Promise.all(promises).then(x => console.log(x.length));

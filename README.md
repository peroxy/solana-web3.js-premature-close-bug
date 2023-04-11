Using the Connection class' method getAccountInfo with Promise.all and more than 25 requests will fail with:

Error: failed to get info about account Cfuy5T6osdazUeLego5LFycBQebm9PP3H7VNdCndXXEN: **FetchError: Invalid response body while trying to fetch <redacted RPC url> Premature close**
at Connection.getAccountInfo (/home/dev/sandbox/test/node_modules/@solana/web3.js/src/connection.ts:3517:13)
at processTicksAndRejections (node:internal/process/task_queues:96:5)
at async Promise.all (index 12)

To reproduce the issue:

1. git clone git@github.com:peroxy/solana-web3.js-premature-close-bug.git
2. yarn install
3. yarn start


import store from './redux/store.js';
import { fetch_mint_data } from './redux/actions/mintActions.js';
import { initWeb3, initStaticWeb3 } from './web3.js';

export const TYPE_OF_MINT = 'gold';

const rpcs = [
    {
        chainId: 3,
        url: 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    },
];

initWeb3();
initStaticWeb3(rpcs);

let fetched = false;

store.subscribe(() => {
    const { web3Reducer, mintReducer } = store.getState();

    if (!fetched) {
        if (!web3Reducer.initialized) return;
        store.dispatch(fetch_mint_data(TYPE_OF_MINT));
        fetched = true;
    }
});

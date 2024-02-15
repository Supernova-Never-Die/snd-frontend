// store/index.js
import { createStore } from 'vuex';

export default createStore({
    state: {
        mode: 'supply',
        assets: [
            {
                id: 1, name: 'USDT',
                supply: { balance: 0, apy: '3.95%', valueLocked: '$25,000,077.05' },
                borrow: { balance: 0, apy: '3.95%', valueLocked: '$25,000,077.05' }

            },
            {
                id: 2, name: 'ETH',
                supply: { balance: 0, apy: '4.00%', valueLocked: '$10,000,000.00' },
                borrow: { balance: 0, apy: '3.95%', valueLocked: '$25,000,077.05' }

            },
            {
                id: 3, name: 'USDC',
                supply: {
                    balance: 0, apy: '4.00%', valueLocked: '$10,000,000.00'
                },
                borrow: { balance: 0, apy: '3.95%', valueLocked: '$25,000,077.05' }

            },
            // Add other assets accordingly
        ],
    },
    getters: {
        mode: state => state.mode,
        assets: (state) => {
            // Map assets to include only the relevant mode data
            return state.assets.map(asset => ({
                id: asset.id,
                name: asset.name,
                ...asset[state.mode]
            }));
        },
        getAssetById: (state, getters) => (id) => {
            // Use the processed assets data from the getters to find by ID
            return getters.assets.find(asset => asset.id === id);
        }
    },
    mutations: {
        setMode(state, mode) {
            state.mode = mode;
        },
        setAssets(state, assets) {
            state.assets = assets;
        }
    },
    actions: {
        updateMode({ commit }, mode) {
            commit('setMode', mode);
        },
        updateAssets({ commit }, assets) {
            commit('setAssets', assets);
        }
    }
});

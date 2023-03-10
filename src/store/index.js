import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        screenSize: {
            width: 0,
            height: 0
        },
        stateDeposit: [],
        cashBalance: 0,
    },
    mutations: {
        setScreenSize(state, screenSize) {
            state.screenSize.width = screenSize.width
            state.screenSize.height = screenSize.height
        },
        setDeposit: async function (state, val) {
            state.stateDeposit = val || []
        },
        setCashBalance: async function (state, val) {
            state.cashBalance = val
        },
    },
    actions: {

    },
    modules: {

    },
})
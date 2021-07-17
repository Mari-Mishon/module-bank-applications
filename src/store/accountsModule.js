import axios from "axios";
export default {
    state: {
        accounts: [],
    },
    mutations: {
        setAccounts(state, payload) {
            state.accounts = payload
        },
    },
    getters: {
        getAllAccounts(state) {
            return state.accounts
        },

    },

    actions: {
        fetchAccounts(context) {
            try {
                axios.get("/meetings")
                    .then(response => context.commit("setAccounts", response.data));
            } catch (e) {
                alert("Error");
            }
        },
    },
}
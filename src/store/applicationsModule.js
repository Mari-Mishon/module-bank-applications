import axios from "axios";
export default {
    state: {
        applications: [],
    },
    mutations: {
        setApplications(state, payload) {
            state.applications = payload
        },

        setNewApplication(state, payload) {
            this.applications = state.applications.push(payload)
        }
    },
    getters: {
        getAllApplications(state) {
            return state.applications
        },

    },

    actions: {
        fetchApplications(context) {
            try {
                axios.get("/list")
                    .then(responce => context.commit("setApplications", responce.data));
            } catch (e) {
                alert("Error");
            }
        },

        addNewApplication(context, payload) {
            context.commit("setNewApplication", payload.application)

        }
    },
}
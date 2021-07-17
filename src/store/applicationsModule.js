import axios from "axios";
export default {
    state: {
        applications: [],
        openedApplications: [],
    },
    mutations: {
        setApplications(state, applications) {
            state.applications = applications
        },

        setNewApplication(state, application) {
            this.applications = state.applications.push(application)
        },
        setOpenApplicationId(state, applicationId) {
            if (!state.openedApplications.includes(applicationId)) {
                this.openedApplications = state.openedApplications.push(applicationId)
            }
        }
    },
    getters: {
        getAllApplications(state) {
            return state.applications;
        },
        getApplicationById(state) {
            return (id) => {
                return state.applications.find((application) => {
                    console.log(application)
                    console.log(id)
                    return Number(application.id) === Number(id)
                }
                )
            };
        },
        getLastId(state) {
            return Number(state.applications.slice().sort((a, b) => b.id - a.id)[0].id);
        },
        getLastNum(state) {
            return state.applications.slice().sort((a, b) => b.num - a.num)[0].num;
        },
        getOpenedApplications(state) {
            return state.openedApplications;
        }
    },

    actions: {
        fetchApplications(context) {
            try {
                axios.get("/list")
                    .then(response => context.commit("setApplications", response.data));
            } catch (e) {
                alert("Error");
            }
        },

        addNewApplication(context, payload) {
            context.commit("setNewApplication", payload.application);

        },
        addOpenApplication(context, payload) {
            context.commit("setOpenApplicationId", payload.applicationId)
        }
    },
}
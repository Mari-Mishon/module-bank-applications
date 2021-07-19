import axios from "axios";
import dayjs from "dayjs";
export default {
    state: {
        applications: [],
        openedApplications: [],
    },
    mutations: {
        updateApplication(state, updatedApplication) {
            let applicationIndex = state.applications.indexOf((application) => {
                return Number(application.id) === Number(updatedApplication.id)
            })
            state.applications[applicationIndex] = updatedApplication;
        },

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
                    .then((response) => {
                        response.data.forEach((obj) => {
                            obj.dadd = dayjs(obj.dadd).format("YYYY-MM-DD[T]HH:mm")
                            obj.id = Number(obj.id)
                        }
                        )
                        return response.data;
                    })
                    .then(data => context.commit("setApplications", data));
            } catch (e) {
                alert("Error");
            }
        },
        addNewApplication(context, payload) {
            context.commit("setNewApplication", payload.application);

        },
        addOpenApplication(context, payload) {
            context.commit("setOpenApplicationId", payload.applicationId)
        },
        updateApplication(context, payload) {
            context.commit("updateApplication", payload.application)
        }
    },
}
import axios from "axios";
import dayjs from "dayjs";
export default {
    state: {
        applications: [],
        openedApplications: [],
    },
    mutations: {
        updateApplication(state, updatedApplication) {
            let application = state.applications.find((application) => {
                return Number(application.id) === Number(updatedApplication.id)
            })
            Object.assign(application, updatedApplication);
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
            return state.applications.reduce((prev, current) => {
                return (prev.id > current.id) ? prev : current
            }, []).id
        },
        getLastNum(state) {
            return state.applications.reduce((prev, current) => {
                return (prev.num > current.num) ? prev : current
            }, []).num
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
                console.log(e);;
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
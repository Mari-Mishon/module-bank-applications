import Vue from 'vue'
import Vuex from 'vuex'
import applicationsModule from './applicationsModule'
import accountsModule from './accountsModule'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        applicationsModule, accountsModule
    },
})
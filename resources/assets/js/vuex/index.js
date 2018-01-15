import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from '../vuex/getters'
import * as actions from '../vuex/actions'
import * as mutations from '../vuex/mutations'
import state from '../vuex/state.js'

Vue.use(Vuex)

export default new Vuex.Store({
    getters,
    actions,
    mutations,
    state
})

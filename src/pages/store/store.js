import Vue from 'vue'
import Vuex from 'vuex'
import AuthModule from './AuthModule'

Vue.use(Vuex)

const store =  new Vuex.Store({
	modules : {
		auth: AuthModule
	},
	  state: {
	  	alert_message : null
	  },
	  getters : {
	  	alert_message : state => state.alert_message
	  },
	  mutations: {
	  	setAlertMessage(state, payload){
	  		state.alert_message = payload
	  	}
	  }
})


export default store
import Vue from 'vue';
import Vuex from 'vuex';
import Cookies from 'js-cookie';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		token: Cookies.get('token') || ''
	},
	mutations: {
		setToken(state, token) {
			state.token = token;
			Cookies.set('token', token);
		},
		clearToken(state) {
			state.token = '';
			Cookies.remove('token');
		},
	},
	actions: {
		setToken({
			commit
		}, token) {
			commit('setToken', token);
		},
		
	},
	getters: {
		getToken: (state) => state.token,
	},
});

export default store;
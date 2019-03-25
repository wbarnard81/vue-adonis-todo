import HTTP from '../http';

export default {
  namespaced: true,
  state: {
      registerEmail: null,
      registerPassword: null,
      registerError: null,
      token: null,
  },
  actions: {
    register({commit, state}) {
      return HTTP().post('http://localhost:3333/api/auth/register', {
        email: state.registerEmail,
        password: state.registerPassword,
      });
    }
  },
  mutations: {
      setToken(state, token) {
          state.token = token;
      },
      setRegisterEmail(state, email) {
          state.registerEmail = email;
      },
      setRegisterPassword(state, password) {
          state.registerPassword = password;
      },
  },
};
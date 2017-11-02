import { loginByEmail } from '../../api/login'
import Cookies from 'js-cookie'
const user = {
  state: {
    user: '',
    status: '',
    email: '',
    code: '',
    uid: undefined,
    auth_type: '',
    token: Cookies.get('Admin-Token'),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },
  mutations: {
    SET_AUTH_TYPE: (state, type) => {
      state.auth_type = type
    },
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_UID: (state, uid) => {
      state.uid = uid
    },
    SET_EMAIL: (state, email) => {
      state.email = email
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    LOGIN_SUCCESS: () => {
      console.log('login success')
    },
    LOGOUT_USER: state => {
      state.user = ''
    }
  },
  actions: {
     // 邮箱登录
    LoginByEmail ({ commit }, userInfo) {
      const email = userInfo.email.trim()
      const password = userInfo.Pass
      return new Promise((resolve, reject) => {
        loginByEmail(email, password).then(xhr => {
          const res = xhr.data
          const data = res.data
          if (data && data.role) {
            commit('SET_ROLES', data.role)
            commit('SET_NAME', data.name)
            commit('SET_EMAIL', data.email)
            commit('SET_AVATAR', data.avatar)
            commit('SET_UID', data.uid)
            commit('SET_INTRODUCTION', data.introduction)
          }
          Cookies.set('Admin-Token', 'Admin')
          commit('SET_TOKEN', data.token)
          commit('SET_EMAIL', data.email)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user

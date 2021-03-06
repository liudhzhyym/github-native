import t from './actionTypes'

const initialState = {
  token: '',
  login: ''
}

export default (state = initialState, action) => {
  switch (action.type) {

    case t.SET_TOKEN:
      return {
        ...state,
        token: action.token
      }

    case t.SET_LOGIN:
      return {
        ...state,
        login: action.login
      }

    default:
      return state
  }
}

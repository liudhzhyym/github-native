import t from './actionTypes'

const initialState = {
  issues: false,
  repos: false,
  notifications: false,
  timeline: false,
  trending: false,
  profile: false,
  search: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case t.REQUEST_ISSUES:
      return {
        ...state,
        issues: true
      }

    case t.RECEIVE_ISSUES:
      return {
        ...state,
        issues: false
      }

    case t.REQUEST_REPOS:
      return {
        ...state,
        repos: true
      }

    case t.RECEIVE_REPOS:
      return {
        ...state,
        repos: false
    }

    case t.REQUEST_TIMELINE:
      return {
        ...state,
        timeline: true
      }

    case t.RECEIVE_TIMELINE:
      return {
        ...state,
        timeline: false
      }

    case t.REQUEST_NOTIFICATIONS:
      return {
        ...state,
        notifications: true
      }

    case t.RECEIVE_NOTIFICATIONS:
      return {
        ...state,
        notifications: false
      }

    case t.REQUEST_TRENDING:
      return {
        ...state,
        trending: false
      }

    case t.RECEIVE_TRENDING:
      return {
        ...state,
        trending: false
      }

    case t.REQUEST_PROFILE:
      return {
        ...state,
        profile: true
      }

    case t.RECEIVE_PROFILE:
      return {
        ...state,
        profile: false
      }

    case t.REQUEST_SEARCH:
      return {
        ...state,
        search: true,
      }

    case t.RECEIVE_SEARCH:
      return {
        ...state,
        search: false,
      }

    default:
      return state
  }
}

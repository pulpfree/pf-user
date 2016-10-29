import ApolloClient from 'apollo-client'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { user } from '../modules/user/userReducer'
import { site } from '../modules/site/siteReducer'

const client = new ApolloClient()

const rootReducer = combineReducers({
  apollo: client.reducer(),
  routing: routerReducer,
  site,
  user,
})

export default rootReducer
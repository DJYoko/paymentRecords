import { createStore } from 'redux'
import payments from '../reducers/'

const store = createStore(payments)

export default store

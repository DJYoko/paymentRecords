
import store from '../store'


export const addPayment = (payload) => {
	const currentId = getLargestPaymentId();
  return {
    type: 'ADD_PAYMENT',
    id: nextTodoId++,
    name: payload.name
  }
}

const getLargestPaymentId () => {
const _state = store.getState();
console.log(_state);
}

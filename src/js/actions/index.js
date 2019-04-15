
import store from '../store'


export const addPayment = (payload) => {
	const currentId = getLargestPaymentId();
  return {
    type: 'ADD_PAYMENT',
    id: nextTodoId++,
    name: payload.name,
    value: payload.value,
    payed_at: payload.payed_at,
  }
}

const getLargestPaymentId () => {
const _state = store.getState();
console.log(_state);
}

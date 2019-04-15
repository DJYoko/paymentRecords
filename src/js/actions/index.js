import store from '../store'

export const ADD_PAYMENT = 'ADD_PAYMENT';

export const addPayment = (payload) => {
	// let currentId = getLargestPaymentId();
  return {
    type: 'ADD_PAYMENT',
  //  id: currentId++,
    name: payload.name,
    value: payload.value,
    payed_at: payload.payed_at,
  }
}

const getLargestPaymentId = () => {
	const _state = store.getState();
	console.log(_state);
	return 1;
}

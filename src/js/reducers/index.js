import { ADD_PAYMENT } from '../actions/';

const initPayments = [
	{
		'id': 1,
		'name': '初期値',
		'value': 100000,
		'payed_at': '2019-01-01'
	},
	{
		'id': 2,
		'name': '1月度給与振り込',
		'value': 441216,
		'payed_at': '2019-01-10'
	},
	{
		'id': 3,
		'name': '食費・消耗品',
		'value': -80000,
		'payed_at': '2019-01-11'
	},
	{
		'id': 4,
		'name': '電気ガス水道ネット',
		'value': -29233,
		'payed_at': '2019-01-20'
	},
	{
		'id': 5,
		'name': '交際費',
		'value': -8982,
		'payed_at': '2019-01-20'
	},
	{
		'id': 6,
		'name': '住宅ローン',
		'value': -98982,
		'payed_at': '2019-01-31'
	},
	{
		'id': 7,
		'name': '養育費',
		'value': -28010,
		'payed_at': '2019-01-24'
	},
	{
		'id': 8,
		'name': '児童手当振込',
		'value': 35000,
		'payed_at': '2019-01-31'
	}
];

const payments = (state = initPayments, action) => {
	switch (action.type) {
		case 'ADD_PAYMENT':
			const mergedState = state.concat([{
				'id': 8,
				'name': action.name,
				'value': action.value,
				'payed_at': action.payed_at,
			}])
			return mergedState;
		default:
			return state
	}
}

export default payments;

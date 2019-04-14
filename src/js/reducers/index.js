const initialState = {
	payments: [
	 {
	   "id": 1,
	   "name": "初期値",
	   "value": 100000,
	   "payed_at": "2019-01-01 00:00:00"
	 },
	 {
	   "id": 2,
	   "name": "1月度給与振り込",
	   "value": 441216,
	   "payed_at": "2019-01-10 00:00:00"
	 },
	 {
	   "id": 3,
	   "name": "食費・消耗品",
	   "value": -80000,
	   "payed_at": "2019-01-11 00:00:00"
	 },
	 {
	   "id": 4,
	   "name": "電気ガス水道ネット",
	   "value": -29233,
	   "payed_at": "2019-01-20 00:00:00"
	 },
	 {
	   "id": 5,
	   "name": "交際費",
	   "value": 8982,
	   "payed_at": "2019-01-20 00:00:00"
	 }
	],
	term:{
		start: 0,
		end: 0,
	}
}


export default (state = initialState, action) => {
	return state
}

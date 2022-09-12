import { ADD_PAYMENT } from '../actions/'
import util from '../util'

const now = new Date()
const currentYear = now.getFullYear()
const currentMonth = util.zeroPadding(now.getMonth() + 1, 2)

const initPayments = [
    {
        id: 1,
        name: 'init money',
        value: 0,
        payed_at: `${currentYear}-${currentMonth}-01`,
    },
]

const payments = (state = initPayments, action) => {
    switch (action.type) {
        case 'ADD_PAYMENT':
            const mergedState = state.concat([
                {
                    id: '',
                    name: action.name,
                    value: action.value,
                    payed_at: action.payed_at,
                },
            ])
            return mergedState
        default:
            return state
    }
}

export default payments

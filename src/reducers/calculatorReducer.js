import {
    ADD_DIGIT,
    CALCULATE,
    CHOOSE_SIGN,
    CLEAR,
    CLEAR_ALL,
    DELETE_DIGIT,
} from '../actions/types'

const initialState = {
    firstNumber: 0,
    secondNumber: 0,
    sign: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_DIGIT:
            state = { ...state }
            if (state.sign) {
                state.secondNumber =
                    state.secondNumber * 10 + parseInt(action.payload)
            } else {
                state.firstNumber =
                    state.firstNumber * 10 + parseInt(action.payload)
            }
            return state
        case CHOOSE_SIGN: {
            state = { ...state }
            state.sign = action.payload
            return state
        }
        case CALCULATE: {
            state = { ...state }
            if (state.sign) {
                state.firstNumber = state.sign(
                    state.firstNumber,
                    state.secondNumber
                )
                state.secondNumber = 0
                state.sign = null
            }

            return state
        }
        case CLEAR_ALL: {
            return (state = initialState)
        }
        case CLEAR: {
            state = { ...state }
            if (state.sign) {
                state.secondNumber = 0
            } else {
                state.firstNumber = 0
            }

            return state
        }
        case DELETE_DIGIT: {
            state = { ...state }
            if (state.sign) {
                state.secondNumber = state.secondNumber / 10
            } else {
                state.firstNumber = state.firstNumber / 10
            }

            return state
        }

        default:
            return state
    }
}

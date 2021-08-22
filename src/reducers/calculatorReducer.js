import {
    ADD_DIGIT,
    CALCULATE,
    CHOOSE_ACTION,
    CLEAR,
    CLEAR_ALL,
    DELETE_DIGIT,
} from '../actions/types'

const initialState = {
    firstNumber: 0,
    secondNumber: 0,
    selectedAction: null,
}

export default (state = initialState, action) => {
    let newState = { ...state }

    switch (action.type) {
        case ADD_DIGIT: {
            if (newState.selectedAction) {
                newState.secondNumber =
                    newState.secondNumber * 10 + action.payload
            } else {
                newState.firstNumber =
                    newState.firstNumber * 10 + action.payload
            }
            return newState
        }
        case CHOOSE_ACTION: {
            newState.selectedAction = action.payload
            return newState
        }
        case CALCULATE: {
            if (newState.selectedAction) {
                newState.firstNumber = newState.selectedAction(
                    newState.firstNumber,
                    newState.secondNumber
                )
                newState.secondNumber = 0
                newState.selectedAction = null
            }

            return newState
        }
        case CLEAR_ALL: {
            return (newState = initialState)
        }
        case CLEAR: {
            if (newState.selectedAction) {
                newState.secondNumber = 0
            } else {
                newState.firstNumber = 0
            }

            return newState
        }
        case DELETE_DIGIT: {
            if (newState.selectedAction) {
                newState.secondNumber = Math.floor(newState.secondNumber / 10)
            } else {
                newState.firstNumber = Math.floor(newState.firstNumber / 10)
            }

            return newState
        }

        default:
            return state
    }
}

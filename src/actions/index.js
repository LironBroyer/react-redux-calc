import {
    ADD_DIGIT,
    CALCULATE,
    CHOOSE_ACTION,
    CLEAR,
    CLEAR_ALL,
    DELETE_DIGIT,
} from './types'

export const addDigit = (digit) => ({
    type: ADD_DIGIT,
    payload: digit,
})

export const chooseAction = (action) => ({
    type: CHOOSE_ACTION,
    payload: action,
})

export const calculate = () => ({
    type: CALCULATE,
})

export const clearAll = () => ({
    type: CLEAR_ALL,
})

export const clear = () => ({
    type: CLEAR,
})

export const deleteDigit = () => ({
    type: DELETE_DIGIT,
})

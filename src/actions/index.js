import {
    ADD_DIGIT,
    CALCULATE,
    CHOOSE_SIGN,
    CLEAR,
    CLEAR_ALL,
    DELETE_DIGIT,
} from './types'

export const addDigit = (digit) => {
    return {
        type: ADD_DIGIT,
        payload: digit,
    }
}

export const chooseSign = (sign) => {
    return {
        type: CHOOSE_SIGN,
        payload: sign,
    }
}

export const calculate = () => {
    return {
        type: CALCULATE,
    }
}

export const clearAll = () => {
    return {
        type: CLEAR_ALL,
    }
}

export const clear = () => {
    return {
        type: CLEAR,
    }
}

export const deleteDigit = () => {
    return {
        type: DELETE_DIGIT,
    }
}

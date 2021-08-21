import { Grid } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import React, { Fragment } from 'react'
import MyButton from './MyButton'
import {
    addDigit,
    calculate,
    chooseSign,
    clear,
    clearAll,
    deleteDigit,
} from '../actions'
import { useDispatch } from 'react-redux'

const FlexedDiv = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
})

const GrowGrid = styled(Grid)({
    flexGrow: '2',
})

const Keypad = () => {
    const dispatch = useDispatch()

    const buildNumbersButtons = () => {
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

        return numbers.reverse().map((number) => {
            return (
                <Grid container item xs={4} justifyContent="center">
                    <MyButton
                        backgroundColor="secondary"
                        text={number}
                        onClick={(e) => dispatch(addDigit(e.target.outerText))}
                    ></MyButton>
                </Grid>
            )
        })
    }

    const signs = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => x / y,
    }

    const onSignClick = (e) => {
        dispatch(chooseSign(signs[e.target.outerText]))
    }

    const buildSignsButtons = () => {
        return Object.keys(signs).map((sign) => {
            return (
                <Grid item>
                    <MyButton
                        backgroundColor="primary"
                        text={sign}
                        onClick={(e) => onSignClick(e)}
                    ></MyButton>
                </Grid>
            )
        })
    }

    const buildClearButtons = () => {
        return (
            <Fragment>
                <Grid item>
                    <MyButton
                        backgroundColor="primary"
                        text="Clear All"
                        onClick={() => dispatch(clearAll())}
                    ></MyButton>
                </Grid>
                <Grid item>
                    <MyButton
                        backgroundColor="primary"
                        text="Clear"
                        onClick={() => dispatch(clear())}
                    ></MyButton>
                </Grid>
                <Grid item>
                    <MyButton
                        backgroundColor="primary"
                        text="delete"
                        onClick={() => dispatch(deleteDigit())}
                    ></MyButton>
                </Grid>
                <Grid item>
                    <MyButton
                        backgroundColor="primary"
                        text="="
                        onClick={() => dispatch(calculate())}
                    ></MyButton>
                </Grid>
            </Fragment>
        )
    }

    return (
        <FlexedDiv>
            <GrowGrid
                container
                item
                spacing={1}
                xs={12}
                sm={8}
                direction="row-reverse"
            >
                {buildNumbersButtons()}
            </GrowGrid>
            <Grid
                container
                item
                direction="column"
                justifyContent="space-around"
                alignItems="center"
                xs={12}
                sm={2}
            >
                {buildSignsButtons()}
            </Grid>
            <Grid
                container
                item
                spacing={1}
                direction="column"
                alignItems="center"
                xs={12}
                sm={2}
            >
                {buildClearButtons()}
            </Grid>
        </FlexedDiv>
    )
}

export default Keypad

import { Grid } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import React from 'react'
import MyButton from './MyButton'
import {
    addDigit,
    calculate,
    chooseAction,
    clear,
    clearAll,
    deleteDigit,
} from '../actions'
import { useDispatch } from 'react-redux'
import GridItem from './GridItem'

const FlexedDiv = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
})

const Keypad = () => {
    const dispatch = useDispatch()

    const renderNumbersButtons = () => {
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

        return numbers.reverse().map((number) => {
            return (
                <Grid container item xs={4} justifyContent="center">
                    <MyButton
                        backgroundColor="secondary"
                        text={number}
                        onClick={(e) => dispatch(addDigit(number))}
                    ></MyButton>
                </Grid>
            )
        })
    }

    const actions = {
        '+': (x, y) => x + y,
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => x / y,
    }

    const renderActionsButtons = () => {
        return Object.keys(actions).map((action) => {
            return (
                <GridItem
                    backgroundColor="primary"
                    text={action}
                    onClick={() => dispatch(chooseAction(actions[action]))}
                ></GridItem>
            )
        })
    }

    const renderClearButtons = () => {
        return (
            <>
                <GridItem
                    backgroundColor="primary"
                    text="Clear All"
                    onClick={() => dispatch(clearAll())}
                ></GridItem>
                <GridItem
                    backgroundColor="primary"
                    text="Clear"
                    onClick={() => dispatch(clear())}
                ></GridItem>
                <GridItem
                    backgroundColor="primary"
                    text="delete"
                    onClick={() => dispatch(deleteDigit())}
                ></GridItem>
                <GridItem
                    backgroundColor="primary"
                    text="="
                    onClick={() => dispatch(calculate())}
                ></GridItem>
            </>
        )
    }

    return (
        <FlexedDiv>
            <Grid
                container
                item
                spacing={1}
                xs={12}
                sm={8}
                direction="row-reverse"
            >
                {renderNumbersButtons()}
            </Grid>
            <Grid
                container
                item
                direction="column"
                justifyContent="space-around"
                alignItems="center"
                xs={12}
                sm={2}
            >
                {renderActionsButtons()}
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
                {renderClearButtons()}
            </Grid>
        </FlexedDiv>
    )
}

export default Keypad

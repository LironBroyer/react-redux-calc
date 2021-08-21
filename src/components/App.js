import React from 'react'
import { Box } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import Keypad from './Keypad'
import { useSelector } from 'react-redux'

const StyledBox = styled(Box)({
    backgroundColor: 'black',
    color: 'white',
    margin: '10% 37% 0 37%',
    borderRadius: '25px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Gisha',
    justifyContent: 'center',
})

const MyHeader = styled('h1')({
    fontSize: '3em',
})

const Result = styled('h2')({
    alignSelf: 'flex-end',
    marginRight: '15%',
    fontSize: '2em',
})

const App = () => {
    const calc = useSelector((state) => state.calculator)

    return (
        <StyledBox>
            <MyHeader>My Calculator</MyHeader>
            <Result>{calc.sign ? calc.secondNumber : calc.firstNumber}</Result>
            <Keypad />
        </StyledBox>
    )
}

export default App

import React from 'react'
import { Container } from '@material-ui/core'
import { styled } from '@material-ui/styles'
import Keypad from './Keypad'
import { useSelector } from 'react-redux'

const StyledContainer = styled(Container)({
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '25px',
    fontFamily: 'Gisha',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '10px',
})

const Header = styled('h1')({
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
        <StyledContainer maxWidth="sm">
            <Header>My Calculator</Header>
            <Result>
                {calc.selectedAction ? calc.secondNumber : calc.firstNumber}
            </Result>
            <Keypad />
        </StyledContainer>
    )
}

export default App

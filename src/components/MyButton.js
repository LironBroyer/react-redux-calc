import React from 'react'
import { Fab } from '@material-ui/core'
import { styled } from '@material-ui/styles'

const StyledButton = styled(Fab)({
    borderRadius: '50%',
    color: 'white',
})

const MyButton = (props) => {
    return (
        <StyledButton
            color={props.backgroundColor}
            size="large"
            onClick={props.onClick}
        >
            {props.text}
        </StyledButton>
    )
}

export default MyButton

import { Grid } from '@material-ui/core'
import MyButton from './MyButton'

const GridItem = (props) => {
    return (
        <Grid item>
            <MyButton
                backgroundColor={props.backgroundColor}
                text={props.text}
                onClick={props.onClick}
            ></MyButton>
        </Grid>
    )
}

export default GridItem

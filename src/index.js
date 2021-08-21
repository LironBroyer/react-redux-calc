import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core'
import App from './components/App'
import theme from './material-ui/theme'
import { createStore } from 'redux'
import reducers from './reducers'
import { Provider } from 'react-redux'

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>,
    document.querySelector('#root')
)

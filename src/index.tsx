import React from 'react'
import {render} from 'react-dom'
import {Router, Route, Switch} from 'react-router-dom'
import store from './redux/store'
import {Provider} from 'react-redux'
import {createBrowserHistory} from 'history'
import Root from './routes'
import {history} from './helper/history'

render(
	<Provider store={store}>
		<Router history={history}>
			<Root />
		</Router>
	</Provider>,
	document.getElementById('root'),
)

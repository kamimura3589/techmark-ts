import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'

import App from '../containers/App'
import About from '../containers/StaticPages/About'

const Root: React.SFC = () => (
	<div>
		<Route exact path="/" component={App} />
		<Route path="/about" component={About} />
	</div>
)

export default Root

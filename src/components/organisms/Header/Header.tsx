import React from 'react'
import {Link} from 'react-router-dom'

const Header: React.SFC = () => (
	<div>
		<Link to="/">Home</Link>
		<Link to="/about">About</Link>
		<Link to="/login">ログイン</Link>
		<Link to="/register">新規登録</Link>
	</div>
)

export default Header

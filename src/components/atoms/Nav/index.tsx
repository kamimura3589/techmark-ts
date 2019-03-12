import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const NavLink = styled(Link)`
	text-decoration: none;
`

interface Props {
	children: React.ReactNode
	link: string
}

const Nav: React.SFC<Props> = ({children, link}) => <NavLink to={link}>{children}</NavLink>

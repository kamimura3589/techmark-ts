import React from 'react'

interface Props {
	children: React.ReactNode
}

const MainLayout: React.SFC<Props> = ({children}) => <div>{children}</div>

export default MainLayout

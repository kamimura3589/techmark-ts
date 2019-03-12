import React, {ReactNode} from 'react'

type Props = {
	children: ReactNode
}

const App: React.SFC<Props> = ({children}) => <div>{children}</div>

export default App

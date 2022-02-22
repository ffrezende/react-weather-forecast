import LocaleProvider from 'providers/LocaleProvider'
import { FC } from 'react'

import Routes from './routes'

const Main: FC = () => {
	return (
		<LocaleProvider>
			<Routes />
		</LocaleProvider>
	)
}
export default Main

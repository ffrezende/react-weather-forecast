import { I18nextProvider } from 'react-i18next'
import { ReactChild, useEffect } from 'react'
import i18n from 'i18n'

interface Props {
	children: ReactChild
}

const LocaleProvider = ({ children }: Props) => {
	const countryCode = 'en-US'

	useEffect(() => {
		i18n.changeLanguage(countryCode)
	}, [countryCode])
	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
export default LocaleProvider

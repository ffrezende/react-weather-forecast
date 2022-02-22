import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import resources from './resources'

i18n.use(initReactI18next).init({
	fallbackLng: 'pt-BR',
	debug: true,
	resources,
	interpolation: {
		escapeValue: false,
	},
})

export default i18n

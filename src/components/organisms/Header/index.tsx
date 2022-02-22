import { useTranslation } from 'react-i18next'
import { InputText } from 'components/atoms'
import { Container, Text } from './styles'

const Header = () => {
	const { t } = useTranslation()
	return (
		<Container>
			<Text>{t('home:homeTitle')}</Text>
			<InputText />
		</Container>
	)
}
export default Header

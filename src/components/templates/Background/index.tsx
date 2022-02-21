import { ReactChild } from 'react'

import { Container } from './styles'

interface Props {
	children: ReactChild
}

export default function Background({ children }: Props) {
	return <Container>{children} </Container>
}

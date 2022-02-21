import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: center;
	text-align: center;
	flex-direction: column;
	width: 100%;
	min-height: 200px;

	> * {
		&:first-child {
			padding: 20px 0px;
		}
	}
`
export const Text = styled.div`
	font-size: 58px;
	color: white;
`

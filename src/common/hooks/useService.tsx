import { useEffect } from 'react'

const useService = () => {
	useEffect(() => {
		console.log('in progress...')
	}, [])
}

export default useService

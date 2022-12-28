import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

interface useIsDesktopParams {
	isDesktop: boolean
}

export const useIsDesktop = (): useIsDesktopParams => {
	const theme = useTheme()
	const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

	return {
		isDesktop
	}
}

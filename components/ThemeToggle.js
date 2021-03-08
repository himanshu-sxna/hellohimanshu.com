import { useColorMode, Icon, Box } from '@chakra-ui/react'
import { FaMoon } from "react-icons/fa"
import { BsSun } from "react-icons/bs"
import colorModes from '../theme/colorMode'

const ThemeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode()



    return(
        <Box
            as="button"
            aria-label="Toggle theme"
            onClick={toggleColorMode}
            color={colorModes.iconColor[colorMode]}
            outline="none"
        >
            {colorMode === 'dark' ? <Icon as={BsSun} boxSize={8}/> : <Icon as={FaMoon} boxSize={7}/>}
        </Box>
    )
}

export default ThemeToggle
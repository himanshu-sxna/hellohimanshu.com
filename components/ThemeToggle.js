import { useColorMode, Icon, Box, HStack, Switch } from '@chakra-ui/react'
import { RiMoonFill } from "react-icons/ri"
import { BsSun } from "react-icons/bs"
import colorModes from '../theme/colorMode'

const ThemeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return(
        <HStack 
            spacing="2"
        >
            <Icon 
                as={BsSun} 
                boxSize={6}
                color={colorModes.iconColor[colorMode]}
            />
            <Switch
                isChecked={colorMode === 'dark' ? true : false}
                colorScheme={colorMode === 'dark' ? 'whiteAlpha' : 'blackAlpha'}
                onChange={toggleColorMode}
                size="md"
            />
            <Icon 
                as={RiMoonFill} 
                boxSize={6}
                color={colorModes.iconColor[colorMode]}
            />
        </HStack>
        /*
        <Box
            as="button"
            aria-label="Toggle theme"
            onClick={toggleColorMode}
            color={colorModes.iconColor[colorMode]}
            outline="none"
            mt={2}
        >
            {colorMode === 'dark' ? <Icon as={BsSun} boxSize={8}/> : <Icon as={FaMoon} boxSize={7}/>}
        </Box>
        */
    )
}

export default ThemeToggle
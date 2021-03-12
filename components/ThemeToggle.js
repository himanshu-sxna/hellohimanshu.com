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
    )
}

export default ThemeToggle
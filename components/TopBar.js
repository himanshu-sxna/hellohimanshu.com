import { Flex, Spacer, Box, useColorMode } from "@chakra-ui/react"
import colorModes from '../theme/colorMode'
import ThemeToggle from "./ThemeToggle"

const TopBar = () => {
    const { colorMode } = useColorMode()

    return (
        <Flex
         mt={10}
        >
            <Box
                as="p"
                textStyle="p"
                fontSize="5xl"
                color={colorModes.heading[colorMode]}
            >
             h.
            </Box>
            <Spacer />
            <Box>
                <ThemeToggle/>
            </Box>  
        </Flex>
    )
}

export default TopBar
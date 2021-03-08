import { Container as ChakraContainer, useColorMode } from "@chakra-ui/react"
import TopBar from "./TopBar"

const Wrapper = ({ children }) => {
    const { colorMode } = useColorMode()

    const bgColor = {
        light:'gray.50',
        dark:'gray.900',
    }
    return(
        <ChakraContainer
            maxW="8xl"
            px={8}
            
        >
            <TopBar/>
            { children }
        </ChakraContainer>
    )
}

export default Wrapper
import { Flex, Spacer, Box } from "@chakra-ui/react"
import ThemeToggle from "./ThemeToggle"

const TopBar = () => {
    return (
        <Flex
         mt={10}
        >
            <Box>
             {/*Dummy div */}
            </Box>
            <Spacer />
            <Box>
                <ThemeToggle/>
            </Box>  
        </Flex>
    )
}

export default TopBar
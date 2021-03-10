import { Stack, Flex, Heading, Text, Button, useColorMode, Link } from '@chakra-ui/react'
import colorModes from '../theme/colorMode'
import AboutSection from "./About"

const IntroSection = () => {
    const { colorMode } = useColorMode()

    return(
        <Stack
            as="main"
            spacing={8}
            justifyContent="center"
            alignItems="center"
            mx={10}
            px={2}
            borderBottom="1px solid"
            borderBottomColor={colorModes.borderColor[colorMode]}            
        >
             <Flex
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                mt={[75,75,75,100,100]}
            >   
                <Heading
                    as="h1"
                    mb={3}
                    size="3xl"
                    textStyle="h1"
                    color={colorModes.heading[colorMode]}
                >
                    Hi, I am Himanshu.
                </Heading>
                <Text
                    color={colorModes.text[colorMode]}
                    textStyle="p"
                    fontSize="2xl"
                    mb={3}
                >
                    I design and build visually appealing and functional web applications.
                </Text>
                <AboutSection/>
                <Link 
                    href="mailto:contact@hellohimanshu.com?subject=Hi there"
                    _hover={{textDecoration:"none"}}
                    _focus={{outline:"none", border:"none"}}
                    rel="noopener noreferrer"
                >
                    <Button
                    size="lg"
                    variant="outline"
                    colorScheme="teal"
                    mt={3}
                    mb={16}
                    border="2px"
                    fontWeight="bold"
                    textStyle="p"
                    _hover={{bg:"teal.600", color:"white"}}
                    _focus={{outline:"none", border:"none"}}
                    >
                        Say hello
                </Button>
                </Link>
            </Flex>
        </Stack>
    )
}

export default IntroSection
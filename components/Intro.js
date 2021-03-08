import { Stack, Flex, Heading, Text, Button, Box,  useColorMode } from '@chakra-ui/react'
import colorModes from '../theme/colorMode'
import AboutSection from "./About"

const IntroSection = () => {
    const { colorMode } = useColorMode()

    return(
        <Stack
            as="main"
            spacing={8}
            justifyContent="center"
            alignItems="flex-start"
            mx={10}
            maxWidth="960px"
            px={2}
            borderBottom="1px solid"
            borderBottomColor={colorModes.borderColor[colorMode]}            
        >
             <Flex
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                mt="150px"
            >   
                <Heading
                    as="h1"
                    mb={3}
                    size="3xl"
                    textStyle="h1"
                    color={colorModes.heading[colorMode]}
                    letterSpacing={1}
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
                <Text
                    color={colorModes.text[colorMode]}
                    textStyle="mono"
                    fontSize="md"
                    mb={2}
                >
                    Click below to know more about me!
                </Text>
                <AboutSection/>
                <Button
                    size="lg"
                    variant="outline"
                    colorScheme="teal"
                    mt={3}
                    mb={16}
                    border="2px"
                    fontWeight="bold"
                    textStyle="p"
                >
                    Say hello
                </Button>
            </Flex>
        </Stack>
    )
}

export default IntroSection
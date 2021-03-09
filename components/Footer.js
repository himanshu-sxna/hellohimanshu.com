import { VStack, HStack, Text, useColorMode, Icon, Link } from '@chakra-ui/react'
import colorModes from '../theme/colorMode'
import { FaLinkedin, FaGithub } from "react-icons/fa"

const Footer = ()=> {
    const { colorMode } = useColorMode()

    return(

        <VStack
            as="footer"
            borderTop="1px solid"
            borderTopColor={colorModes.borderColor[colorMode]}
            minHeight={150}
            spacing={4}
            textAlign="center"
        >
            <Text
                as="p"
                textStyle="p"
                fontSize="lg"
                fontWeight="medium"
                color={colorModes.heading[colorMode]}
                mt={8}
            >
                Thanks for looking around :)
                <br/>
                Feel free to get in touch.
            </Text>
            <Link 
                href="mailto:contact@hellohimanshu.com?subject=Hi there"
                color={colorModes.text[colorMode]}
            >
                contact@hellohimanshu.com
            </Link>
            <HStack
                spacing={3}
                color={colorModes.iconColor[colorMode]}
                mb={10}
            >   <Link
                    href="https://github.com/himanshu-sxna"
                    target="_blank"
                    _focus={{outline:"none", border:"none"}}
                >
                    <Icon as={FaGithub} boxSize={7}/>
                </Link>
                <Link
                    href="https://linkedin.com/in/himanshu-sxna"
                    target="_blank"
                    _focus={{outline:"none", border:"none"}}
                >
                    <Icon as={FaLinkedin} boxSize={7}/>
                </Link>
            </HStack>
        </VStack>
    )
}

export default Footer
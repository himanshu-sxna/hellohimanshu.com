import { HStack, Tooltip, useColorMode, Popover,
    Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
    Button } from "@chakra-ui/react"
import colorModes from '../theme/colorMode'

const AboutSection = () => {
    const { colorMode } = useColorMode()

    return(
        <Accordion allowToggle>
                <AccordionItem>
                    <AccordionButton
                        fontSize="xl"
                        _hover={{backGroundColor:colorModes.iconBgColor[colorMode]}}
                        _focus={{borderColor:'none'}}
                        p={0}
                        mb={3}
                    >
                        👨‍👩‍👧  💻  🏠  ♎  ⚽ 
                    </AccordionButton>
                    <AccordionPanel 
                        p={0} 
                        mb={3}
                        textStyle="mono"
                        fontSize="sm"
                        lineHeight={1.5}
                        letterSpacing={1}
                        color={colorModes.text[colorMode]}
                    >
                        👨‍👩‍👧 Husband and a Father
                        <br/>
                        💻 Full Stack Web Developer
                        <br/>
                        🏠 Adelaide, Australia
                        <br/>
                        ♎ Zodiac: Libra
                        <br/>
                        ⚽ Favorite Sport: Football
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
    )
}

export default AboutSection


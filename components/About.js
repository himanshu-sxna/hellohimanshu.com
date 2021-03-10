import { useState } from "react"
import { Text, useColorMode, Accordion, AccordionItem, AccordionButton, AccordionPanel } from "@chakra-ui/react"
import colorModes from '../theme/colorMode'

const AboutSection = () => {
    const { colorMode } = useColorMode()

    const [ aboutIcon, setAboutIcon ] = useState('👇')

    function switchAboutIcon() { 
        if (aboutIcon === "👇") {
            setAboutIcon("🙂")
        } else if (aboutIcon === "🙂"){
            setAboutIcon("👇")
        } else {
            setAboutIcon("👇")
        }
    }

    return(
        <>
        <Text
            color={colorModes.text[colorMode]}
            textStyle="mono"
            fontSize="md"
            mb={2}
        >
            Click {aboutIcon} to know more about me!
        </Text>
        <Accordion allowToggle>
                <AccordionItem>
                    <AccordionButton
                        fontSize="xl"
                        _hover={{backGroundColor:colorModes.iconBgColor[colorMode]}}
                        _focus={{borderColor:'none'}}
                        p={0}
                        mb={3}
                        onClick={switchAboutIcon}
                    >
                        👨‍👩‍👧  💻  🏠 
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
                        ⚽ Sport: Football
                        <br/>
                        🍕 Food: Pizza
                        <br/>
                        🤸‍♂️ Play: 🏸 🚴‍♂️ 🏊‍♂️
                        <br/>
                        🛠️ DIY Enthusiast
                        <br/>
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
        </>
    )
}

export default AboutSection


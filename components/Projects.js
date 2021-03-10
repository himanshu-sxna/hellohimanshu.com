import { Stack, Box, Heading, useColorMode } from '@chakra-ui/react'
import colorModes from '../theme/colorMode'
import ProjectCard from "./ProjectCard"

const ProjectSection = () => {
    const { colorMode } = useColorMode()

    return(
        <Stack
            as="section"
            spacing={8}
            justifyContent="center"
            alignItems="center"
            mx={10}
            mt={{base: 50, sm:75, lg: 100}}
            px={2}
            borderBottom="1px solid"
            borderBottomColor={colorModes.borderColor[colorMode]}            
        >  
                <Heading
                    as="h2"
                    mb={3}
                    size="2xl"
                    textStyle="h1"
                    color={colorModes.heading[colorMode]}
                    letterSpacing="wide"
                >
                    Apps
                </Heading>
            <ProjectCard/>
            <Box mb={50}>  
            </Box>
        </Stack>
    )
}

export default ProjectSection
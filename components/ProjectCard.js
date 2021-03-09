import { Box, Flex, Link, Text, Image } from '@chakra-ui/react'
import workItems from "../content/work"

const ProjectCard = () => {

    return (
        <>
        { workItems.map((workItem)=>(
            <Link 
                href={workItem.link}
                target="_blank"
                _hover={{textDecoration:"none"}}
                _active={{outline:"none", border:"none"}}
                _focus={{outline:"none", border:"none"}}
                key={workItem.title}
                rel="noopener noreferrer"
            >
                <Flex 
                p={4} 
                flexWrap="wrap"
                alignItems="center"
                justifyContent="flex-start"
                backgroundColor={workItem.bgColor}
                borderRadius="lg"
                my={4}
                overflow="hidden"
                boxShadow="lg"
                maxWidth={700}
                width={{base:300,sm:420, md:700}}
                transition="transform 0.2s"
                _hover={{transform: "scale(1.1)"}}
                cursor="pointer"
                
                >
                    <Box ml={{base:2, md:8}} >
                        <Text
                            fontWeight="bold"
                            textTransform="uppercase"
                            fontSize="lg"
                            letterSpacing="wide"
                            color="teal.600"
                            textStyle="h1"
                            mt={3}
                        >
                            {workItem.title}
                        </Text>
                        <Text
                            mt={3}
                            textStyle="p"
                            fontSize="md"
                            lineHeight="tall"
                            fontWeight="bold"
                            letterSpacing="wide"
                        >
                            {workItem.description}
                        </Text>
                        <Text 
                            mt={2} 
                            color="gray.700"
                            textStyle="mono"
                            fontSize="sm"
                        >
                            {workItem.tech}
                        </Text>
                    </Box>
                    <Box flexShrink={1}>
                        <Image
                        ml={{base:2, md:8}}
                        mt={3}
                        mb={2}
                        width={{md: 600}}
                        borderRadius="lg"
                        src={workItem.image}
                        alt="Woman paying for a purchase"
                        />
                    </Box>
                </Flex>
            </Link>
        ))}
        </>
    )
}

export default ProjectCard

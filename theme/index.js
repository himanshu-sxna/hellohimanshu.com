import { extendTheme } from '@chakra-ui/react'

const custTheme =  extendTheme({
    textStyles: {
        h1: {
          fontFamily:"'Kumbh Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
        },
        p:  {
          fontFamily:"'Kumbh Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
        },
        mono: {
            fontFamily:"'Space Mono', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
        }
    }
})

export default custTheme
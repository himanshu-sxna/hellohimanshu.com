import { extendTheme } from '@chakra-ui/react'

import fonts from "./fonts"

const overrides = {
    fonts,
}

const custTheme =  extendTheme(overrides)

export default custTheme
import React from 'react'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import GlobalStyles from "../theme/GlobalStyles"
import custTheme from "../theme/index"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={ custTheme }>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
          useSystemColorMode:false,
        }}
      >
        <GlobalStyles>
          <Component {...pageProps} />
        </GlobalStyles>
      </ColorModeProvider>
    </ChakraProvider>
  ) 
}

export default MyApp

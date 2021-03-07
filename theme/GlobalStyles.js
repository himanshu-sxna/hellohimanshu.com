import React from 'react'
import { Global, css } from '@emotion/react'
import { useColorMode } from "@chakra-ui/react"

const GlobalStyles = ({ children }) =>{
    const { colorMode } = useColorMode()
  
    return(
      <>
        <Global
        styles={css`
          html {
          min-width: 356px;
          scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : 'gray.900'};
          }
        `}
        />
        { children }
      </>
      
    )
 } 

 export default GlobalStyles
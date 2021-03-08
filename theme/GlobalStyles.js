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
            background: ${colorMode === 'light' ? '#F7FAFC' : '#171923'};
          }
          .chakra-accordion__item {
            border: none !important
          }
        `}
        />
        { children }
      </>
      
    )
 } 

 export default GlobalStyles
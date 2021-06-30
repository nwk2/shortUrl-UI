import * as React from 'react'
import styled from 'styled-components'

import { ChakraProvider, Container, Heading } from '@chakra-ui/react'

const StyledHeading = styled(Heading)`
  text-align: center;
`

const Layout = ({ pageTitle, children }) => {
  return (
    <ChakraProvider>
      <Container maxW="container.md" borderRadius="lg">
        {/* <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav> */}
        <StyledHeading fontSize="4xl">{pageTitle}</StyledHeading>
        {children}
      </Container>
    </ChakraProvider>
  )
}

export default Layout
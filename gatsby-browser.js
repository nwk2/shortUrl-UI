import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"

// Replaces @chakra-ui/gatsby-plugin (dropped in the Gatsby 5 upgrade):
// the plugin's provider.js uses JSX without importing React, which fails
// under Gatsby 5's default classic JSX runtime ("React is not defined").
// This wraps the app in the default Chakra theme, exactly as the plugin did.
export const wrapRootElement = ({ element }) => {
  return <ChakraProvider>{element}</ChakraProvider>
}

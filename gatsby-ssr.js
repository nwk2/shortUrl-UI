import * as React from "react"
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"

// Replaces @chakra-ui/gatsby-plugin (dropped in the Gatsby 5 upgrade):
// the plugin's provider.js uses JSX without importing React, which fails
// under Gatsby 5's default classic JSX runtime ("React is not defined").
// ChakraProvider uses the default theme; initialColorMode "light" is the
// default theme's value, the same one the plugin passed through.
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <ColorModeScript initialColorMode="light" key="chakra-ui-no-flash" />,
  ])
}

export const wrapRootElement = ({ element }) => {
  return <ChakraProvider>{element}</ChakraProvider>
}

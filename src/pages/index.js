import React, { useState } from 'react'
import Layout from '../components/layout'
import ShortUrlForm from '../components/shortUrlForm'
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Link,
  Flex,
  Button,
  useClipboard
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import useShortUrl from '../hooks/useShortUrl'

// TODO: Styling of this page. Padding margin etc
const IndexPage = () => {
  const [originalUrl, setOriginalUrl] = useState('')
  const [shortUrl, setShortUrl] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { createShortUrl } = useShortUrl()

  const [value, setValue] = React.useState(null)
  const { hasCopied, onCopy } = useClipboard(value)

  const handleSubmit = async () => {
    console.log('submitted value: ', originalUrl)
    setIsLoading(true)
    const shortUrl = await createShortUrl(originalUrl)
    setIsLoading(false)
    setShortUrl(shortUrl)
    setValue(shortUrl.shortUrl)
    console.log(shortUrl)
  }

  return (
    <Layout pageTitle="Home page">
      <ShortUrlForm
        originalUrl={originalUrl}
        setOriginalUrl={setOriginalUrl}
        handleSubmit={handleSubmit}
        isLoading={isLoading} />
      {/* TODO: extract below into separate component, pass shortUrl into it as prop */}
      {shortUrl &&
      <Box borderWidth="1px" borderRadius="lg">
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>shortened url</Th>
              <Th>expiry date</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Flex>
                  <Link href={shortUrl.shortUrl} isExternal>
                    {shortUrl.shortUrl} <ExternalLinkIcon mx="2px" />
                  </Link>
                  <Button
                    h="2rem"
                    size="sm"
                    colorScheme="teal"
                    variant="ghost"
                    onClick={onCopy}
                    ml={2}>
                    {hasCopied ? "Copied" : "Copy"}
                  </Button>
                </Flex>
              </Td>
              <Td>{shortUrl.expiryDate}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
      }
    </Layout>
  )
}

export default IndexPage
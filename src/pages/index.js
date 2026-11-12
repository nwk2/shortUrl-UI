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
  Text,
  useClipboard
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

import useShortUrl from '../hooks/useShortUrl'

// TODO: Styling of this page. Padding margin etc
const IndexPage = () => {
  const [originalUrl, setOriginalUrl] = useState('')
  const [shortUrl, setShortUrl] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const { createShortUrl } = useShortUrl()

  const [value, setValue] = React.useState(null)
  const { hasCopied, onCopy } = useClipboard(value)

  const handleSubmit = async () => {
    console.log('submitted value: ', originalUrl)
    setIsLoading(true)
    setError(null)
    try {
      const shortUrl = await createShortUrl(originalUrl)
      setShortUrl(shortUrl)
      setValue(shortUrl && shortUrl.short_url)
      console.log(shortUrl)
    } catch (err) {
      console.log(err)
      setError(err.response && err.response.data && err.response.data.error
        ? err.response.data.error
        : 'Failed to shorten URL')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Layout pageTitle="Home page">
      <ShortUrlForm
        originalUrl={originalUrl}
        setOriginalUrl={setOriginalUrl}
        handleSubmit={handleSubmit}
        isLoading={isLoading} />
      {/* TODO: extract below into separate component, pass shortUrl into it as prop */}
      {error &&
        <Text color="red.500">{error}</Text>
      }
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
                  <Link href={shortUrl.short_url} isExternal>
                    {shortUrl.short_url} <ExternalLinkIcon mx="2px" />
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
              <Td>{shortUrl.expiry_date}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
      }
    </Layout>
  )
}

export default IndexPage
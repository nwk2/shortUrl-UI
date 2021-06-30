import React, { useState } from 'react'
import Layout from '../components/layout'
import ShortUrlForm from '../components/shortUrlForm'
import { Box, StatGroup, Stat, StatLabel, StatNumber, Button, Stack } from '@chakra-ui/react'

import useShortUrl from '../hooks/useShortUrl'

// TODO: Styling of this page. Padding margin etc
const IndexPage = () => {
  const [originalUrl, setOriginalUrl] = useState('')
  const [shortUrl, setShortUrl] = useState(null)
  const { createShortUrl } = useShortUrl()

  const handleSubmit = async () => {
    console.log('submitted value: ', originalUrl)
    const shortUrl = await createShortUrl(originalUrl)
    setShortUrl(shortUrl)
    console.log(shortUrl)
  }

  return (
    <Layout pageTitle="Home page">
      <ShortUrlForm
        originalUrl={originalUrl}
        setOriginalUrl={setOriginalUrl}
        handleSubmit={handleSubmit} />
      {/* TODO: extract below into separate component, pass shortUrl into it as prop */}
      {shortUrl &&
      <Box borderWidth="1px" borderRadius="lg">
        <Stack direction="row">
        <StatGroup>
          <Stat>
            <StatLabel>shortUrl</StatLabel>
            <StatNumber>localhost:8080/redirect/some-generated-hash-key</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>expiryDate</StatLabel>
            <StatNumber>some time stamp</StatNumber>
          </Stat>
        </StatGroup>
        <Button 
          colorScheme="teal"
          size="xs"
          onClick={() => {navigator.clipboard.writeText('some text from state')}}>
          Copy
        </Button>
        </Stack>
      </Box>
      }
    </Layout>
  )
}

export default IndexPage
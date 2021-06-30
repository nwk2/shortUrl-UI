import React from 'react'
import {
  FormControl,
  FormHelperText,
  Input,
  Button,
  Stack
} from "@chakra-ui/react"

const ShortUrlForm = ({ originalUrl, setOriginalUrl, handleSubmit}) => {
  const isSubmitDisabled = () => {
    return originalUrl ? false : true
  }

  return (
    <FormControl isRequired>
      {/* <FormLabel>Original URL</FormLabel> */}
      <Stack direction="row">
        <Input
          type="url"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value) } />
        <Button
          colorScheme="teal"
          variant="solid"
          onClick={handleSubmit}
          isDisabled={isSubmitDisabled()}>
            Shorten!
        </Button>
      </Stack>
      <FormHelperText>Input link to generate shortened URL</FormHelperText>
    </FormControl>
  )
}

export default ShortUrlForm
import React from 'react'
import {
  FormControl,
  FormHelperText,
  InputGroup,
  Input,
  InputRightElement,
  Button
} from '@chakra-ui/react'

const ShortUrlForm = ({ originalUrl, setOriginalUrl, handleSubmit, isLoading}) => {
  const isSubmitDisabled = () => {
    return originalUrl ? false : true
  }

  return (
    <FormControl isRequired>
      <InputGroup size="md">
        <Input
          pr="6rem"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value) } />
          <InputRightElement width="6rem">
            <Button
              h="1.75rem"
              size="sm"
              colorScheme="teal"
              variant="solid"
              onClick={handleSubmit}
              isDisabled={isSubmitDisabled()}
              isLoading={isLoading}>
              Shorten
            </Button>
          </InputRightElement>
      </InputGroup>
      <FormHelperText>Input link to generate shortened URL</FormHelperText>
    </FormControl>
  )
}

export default ShortUrlForm
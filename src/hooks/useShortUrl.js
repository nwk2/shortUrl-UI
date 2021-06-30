import { useCallback, useState } from "react"

export default function useShortUrl() {
  const [isLoading, setIsLoading] = useState(false)

  const createShortUrl = useCallback(async (originalUrl) => {
    setIsLoading(true)
    // const requestUrl = ''
    try {
      const mockResponse = {
        "shortUrl": `localhost:8080/redirect/some-generated-hash-key`,
        "expiryDate": "string"
      }
      // const mockResponse = {
      //   "id": 0,
      //   "shortUrl": `localhost:8080/redirect/some-generated-hash-key`,
      //   "originalUrl": originalUrl,
      //   "hashKey": 'some-generated-hash-key',
      //   "createdDate": "createdDateTS",
      //   "expiryDate": "expiryDateTS"
      // }
      return mockResponse
    } catch (err) {
      console.log(err)
    }
    setIsLoading(false)
  }, [])

  return { createShortUrl }
}
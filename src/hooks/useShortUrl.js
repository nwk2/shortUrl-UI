import { useCallback } from "react"
import axios from "axios"

export default function useShortUrl() {

  const createShortUrl = useCallback(async (originalUrl) => {
    try {
      const res = await axios.post(`https://test-go-app-url.herokuapp.com/shortUrls`, { "originalUrl": originalUrl })
      return res.data
    } catch (err) {
      console.log(err)
    }
  }, [])

  return { createShortUrl }
}
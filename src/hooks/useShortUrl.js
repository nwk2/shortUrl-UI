import { useCallback } from "react"
import axios from "axios"

// Backend base URL, e.g. http://localhost:8080 for local dev.
// Set GATSBY_API_URL at build time to point at a deployed backend.
const API_BASE_URL = process.env.GATSBY_API_URL || "http://localhost:8080"

export default function useShortUrl() {

  const createShortUrl = useCallback(async (originalUrl) => {
    const res = await axios.post(`${API_BASE_URL}/short-urls`, { "original_url": originalUrl })
    return res.data
  }, [])

  return { createShortUrl }
}

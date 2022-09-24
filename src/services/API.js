import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (id) => {
  const [mainData, setMainData] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const request1 = axios.get(`http://localhost:3000/user/${id}`)

    axios
      .all([request1])
      .then(
        axios.spread((...responses) => {
          setMainData(responses[0].data)
          setIsLoading(false)
        })
      )
      .catch((errors) => {
        // react on errors.
        setError(errors)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [id])

  return {
    mainData,
    isLoading,
    error,
  }
}

export default useFetch

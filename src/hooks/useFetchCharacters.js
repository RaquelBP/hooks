import { useState, useEffect } from 'react';

const useFetchCharacters = (initialUrl = "") => { 
  const [url, setUrl] = useState(initialUrl)
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    if (!url) return

    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Respuesta de red OK pero respuesta de HTTP no OK')
        }

        const dataApi = await response.json()
        setData(dataApi)
        setIsLoading(false)
      } catch (error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message)
        setIsLoading(false)
      }
    };

    fetchData()
  }, [url])

  return { url, isLoading, data, setUrl }
};

export default useFetchCharacters;



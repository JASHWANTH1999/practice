import React from 'react'

export function useLocalStorage  ({fix='getItem',value,key})  {
  let data; 
    if(fix === 'setItem'){
    localStorage.setItem(key, JSON.stringify(value))
    }
    else if(fix === 'getItem'){
         data = localStorage.getItem(key)
        return JSON.parse(data)
    }
  return data;
}

export function useFetchHooks  (url)  {
  const [data, setData] = React.useState(null)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [url])

  return { data, loading, error }
}
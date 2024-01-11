import React from 'react'
import Loading from './Loading'

const [loading, setLoading] = useState(true)

useEffect(() => {
  setTimeout(() => setLoading(false), 6000)
}, [])

const LoadingScreen = () => {
  return (
    <>
    {loading === true ? (
            <Loading />
          ):
          (<Home />)}
          </>
  )
}

export default LoadingScreen

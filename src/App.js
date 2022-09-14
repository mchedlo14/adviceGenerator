import React, { useEffect, useState } from 'react'
import './style/App.css'
import Advice from './Components/Advice'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

const App = () => {
  const [loading,setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  },[])

  return (
    <section className='app'>
      {
        loading ? <ClimbingBoxLoader color={'#313A49'} loading={loading}  size={15} />
        :
        <Advice />
      }
    </section>
  )
}

export default App
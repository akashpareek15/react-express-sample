import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {

  const [message, setMessage] = useState();

  useEffect(() => {
    axios.get('http://localhost:5000/api').then((res) => {
      setMessage(res.data.message);
    });
  }, [])

  return (
    <>
      {message}
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const App = () => {

  const [message, setMessage] = useState();

  useEffect(() => {
    axios.get('http://localhost:5555/questions').then((res) => {
      setMessage(res.data);
    });
  }, [])

  return (
    <div >
      {message ? JSON.stringify(message) : null}
    </div>
  )
}

export default App

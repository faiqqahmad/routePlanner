import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from "axios"
import { useState } from 'react';



function App() {

  const [text, setText] = useState("mama")

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const submit = async () => {
    axios.post('http://localhost:4000/input', {
      locations: text.split(";").map(addy => addy.trim()).filter(addy => addy != "")
    })
  }

  return (

    <>
      <TextField fullWidth label={text} onChange={handleChange} id="fullWidth" />
      <Button variant="outlined" onClick={submit}>Go</Button>
      <p id="locations"></p>
    </>
  )
}

export default App

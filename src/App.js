import { useState } from "react";

function Textboxes(){

  const [inputValue,setInputValue] = useState('')
  const [textboxes,setTextboxes] = useState(0)

  const handleChange=(event)=>{
    setInputValue(event.target.value)
  }

  const handleSubmit = ()=>{
    setTextboxes(parseInt(inputValue,10))
  }

  const box = []

  for (let i=0;i<textboxes;i++){
    box.push(
      <input key={i} type="text" placeholder={`textbox ${i+1}`}></input>
    )
  }

  return (
    <div>
      <input 
        type="text" 
        name="inputTextbox" 
        value={inputValue}
        onChange={handleChange}>
      </input>
      <button onClick={handleSubmit}>Sumbit</button>
      <div>{box}</div>
    </div>
    )
}

export default Textboxes;
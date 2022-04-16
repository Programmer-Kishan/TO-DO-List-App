
import React, { useState } from 'react'

const AdderPage = (props) => {

    const [text, setText] = useState("")

    const handleClick = () => {
        props.addNote(text)
        setText("")
    }

    const handleChange = (event) => {
        setText(event.target.value)
    }

  return (
    <>
      <div className="noteAdder">
          <h2>Write your task in the note below and click on + button to add it to the TODO-LIST</h2>
          <div className="noteText">
              <textarea 
                name="text" 
                cols="27" 
                rows="7" 
                placeholder='Write you task here...' 
                onChange={handleChange}
                value={text} />
          </div>
          <button className="add" onClick={handleClick}>
            <i className="fa-solid fa-plus"></i>
          </button>
      </div>
    </>
  )
}

export default AdderPage

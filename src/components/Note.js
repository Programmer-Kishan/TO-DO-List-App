
import React from 'react'

const Note = (props) => {


  return (
    <>
      <div className="noteTable">
        <h2>Your TODO LIST is: </h2>
        <div className="noteArea">
            <ol>
              {
                props.notes.map((currEle, index) => {
                  return (
                      <li key={index}>
                        {index+1}. {currEle}  
                        <i className="fa-solid fa-ban delete" onClick={() => props.deleteNote(index)}></i>
                      </li>
                  )
                })
              }
              {/* <li>Task</li>
              <li>Task</li>
              <li>Task</li> */}
            </ol>
        </div>
      </div>
    </>
  )
}

export default Note

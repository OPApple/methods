import React from 'react'

export const Input = (props) => {
  return (
    <div className={props.name}>
        <input id={props.inputName}>

        </input>
        
        <button onClick={props.onClick}>{props.btnText}</button>
    </div>
  )
}

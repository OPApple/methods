import React from 'react'

export const Input = (props) => {
  return (
    <div className={props.style}>
        <input className={props.inputStyle} id={props.inputName}>
        </input>

        <div className={props.break}></div>
        
        <button className={props.btnStyle} onClick={props.onClick}>{props.btnText}</button>
    </div>
  )
}

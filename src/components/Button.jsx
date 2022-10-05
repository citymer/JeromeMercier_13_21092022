import React, { Fragment } from 'react'

const Button = ({ content, state, setState }) => {
  const handleClick = (e) => {
    e.preventDefault()
    setState(!state)
  }

  return (
    <Fragment>
      {setState ? (
        <button onClick={handleClick} className="edit-button">
          {content}
        </button>
      ) : (
        <button className="edit-button">{content}</button>
      )}
    </Fragment>
  )
}

export default Button

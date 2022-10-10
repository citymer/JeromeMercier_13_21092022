import React, { useState } from 'react'
import { useStore, useSelector } from 'react-redux'
import { editUserProfil } from '../services/API'

const ChangeName = ({ formOpen, setFormOpen, username, setUsername }) => {
  const store = useStore()
  const token = useSelector((state) => state.token)
  const userFirst = useSelector((state) => state.user.firstName)
  const userLast = useSelector((state) => state.user.lastName)
  const [validInput, setValidInput] = useState({
    invalidmsg: null,
    length: {
      firstName: false,
      lastName: false,
    },
  })

  const patern = new RegExp(/^[a-zA-Z]*$/)
  const handleChange = (e) => {
    if (patern.test(e.target.value) === true) {
      if (e.target.value.length > 1) {
        setValidInput({
          ...validInput,
          invalidmsg: null,
          length: {
            ...validInput.length,
            [e.target.name]: true,
          },
        })
      } else {
        setValidInput({
          ...validInput,
          invalidmsg: null,
          length: {
            ...validInput.length,
            [e.target.name]: false,
          },
        })
      }
      if (e.target.name === 'firstName') {
        setUsername({
          ...username,
          firstName: e.target.value,
        })
      } else {
        setUsername({
          ...username,
          lastName: e.target.value,
        })
      }
    } else {
      setValidInput({
        ...validInput,
        invalidmsg: 'Veuillez saisir des caractères compris entre a et z.',
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (username.firstName.length > 0 && username.lastName.length > 0) {
      editUserProfil(store, token, username)
      setFormOpen(!formOpen)
    } else {
      setValidInput({
        ...validInput,
        invalidmsg: 'Veuillez saisir au moins 2 caractères dans chaque champs.',
      })
    }
  }
  const handleReset = () => {
    setUsername({
      ...username,
      firstName: '',
      lastName: '',
    })
    setFormOpen(!formOpen)
  }

  return (
    <form>
      {validInput.invalidmsg !== null ? (
        <div className="error-msg">{validInput.invalidmsg}</div>
      ) : null}

      <div className="divInput">
        <input
          className="prenom"
          type="text"
          name="firstName"
          onChange={handleChange}
          defaultValue={userFirst}
          required
        />
        <input
          className="nom"
          type="text"
          name="lastName"
          onChange={handleChange}
          defaultValue={userLast}
          required
        />
      </div>
      <div className="buttons">
        <button
          type="submit"
          className="edit-button button-size save"
          onClick={handleSubmit}
        >
          Save
        </button>
        <button
          className="edit-button button-size cancel"
          onClick={handleReset}
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default ChangeName

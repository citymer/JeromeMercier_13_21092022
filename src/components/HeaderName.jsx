import React, { useEffect, useState, Fragment } from 'react'
import { useSelector } from 'react-redux'
import Button from './Button'
import ChangeName from './ChangeName'

const HeaderName = () => {
  const status = useSelector((state) => state.status)
  const user = useSelector((state) => state.user)
  const error = useSelector((state) => state.error)

  const [isLoading, setIsLoading] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const [username, setUsername] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
  })

  useEffect(() => {
    if (status === 'updating') {
      setIsLoading(true)
    }
    if (status === 'resolved' || status === 'rejected') {
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [status])

  return (
    <div className="header">
      {formOpen === true ? (
        <Fragment>
          <h1>Welcome back</h1>
          <ChangeName
            formOpen={formOpen}
            setFormOpen={setFormOpen}
            username={username}
            setUsername={setUsername}
          />
        </Fragment>
      ) : isLoading ? (
        <p>Chargement...</p>
      ) : (
        <Fragment>
          <h1>
            Welcome back
            <br />
            {user.firstName} {user.lastName}!
          </h1>
          {error.status !== null ? (
            <span className="error-msg">
              Impossible de modifier vos information pour le moment
            </span>
          ) : null}
          <Button state={formOpen} setState={setFormOpen} content="Edit Name" />
        </Fragment>
      )}
    </div>
  )
}

export default HeaderName

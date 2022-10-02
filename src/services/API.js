import axios from 'axios'
import {
  authFetching,
  authResolved,
  authRejected,
} from '../features/connextionSlice'

const BASE_URL = 'http://localhost:3001/api/v1/user/'

export const authentification = (store, logCredential) => {
  store.dispatch(authFetching())
  axios
    .post(`${BASE_URL}login`, {
      email: logCredential.email,
      password: logCredential.password,
    })
    .then((response) => {
      const token = response.data.body.token
      getUserProfil(store, token, logCredential.rememberMe)
    })
    .catch((error) => {
      store.dispatch(
        authRejected({
          message: error.message,
          status: error.response.status,
        })
      )
    })
}
export const getUserProfil = (store, token, rememberMe) => {
  axios
    .post(
      `${BASE_URL}profile`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((response) => {
      const payload = {
        ...response.data.body,
        token,
      }
      store.dispatch(authResolved(payload))
      if (rememberMe === true) {
        localStorage.setItem('token', JSON.stringify(token))
      }
    })
    .catch((error) => {
      store.dispatch(
        authRejected({
          message: error.message,
          status: error.response.status,
        })
      )
    })
}

export const editUserProfil = (store, token, userInfo) => {
  store.dispatch(authFetching())
  axios
    .put(
      `${BASE_URL}profile`,
      {
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((response) => {
      store.dispatch(authResolved(response.data.body))
    })
    .catch((error) => {
      store.dispatch(
        authRejected({
          message: error.message,
          status: error.response.status,
        })
      )
    })
}

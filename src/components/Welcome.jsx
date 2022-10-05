import React from 'react'
import Transactions from './Transactions'
import HeaderName from './HeaderName'

const Welcome = () => {
  return (
    <main className="main bg-dark">
      <HeaderName />
      <Transactions />
    </main>
  )
}

export default Welcome

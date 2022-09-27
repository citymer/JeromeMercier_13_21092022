import React from 'react'
import { useState } from 'react'
const Welcome = () => {
  const [block, setBlock] = useState(false)

  function displaySaveName() {
    setBlock(!block)
  }

  return (
    <main className="main bg-dark">
      <div className="header" style={{ display: block ? 'none' : 'block' }}>
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <button className="edit-button" onClick={displaySaveName}>
          Edit Name
        </button>
      </div>
      <div className="headers" style={{ display: block ? 'block' : 'none' }}>
        <h1>Welcome back</h1>
        <div className="divInput">
          <input className="prenom" type="text" value="Prenom" />
          <input className="nom" type="text" value="Nom" />
        </div>
        <div className="buttons">
          <button className="edit-button button-size save">Save</button>
          <button
            className="edit-button button-size cancel"
            onClick={displaySaveName}
          >
            Cancel
          </button>
        </div>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  )
}

export default Welcome

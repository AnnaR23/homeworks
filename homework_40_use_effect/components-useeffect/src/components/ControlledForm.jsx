import React, { useState } from 'react'


export default function ControlledForm() {
  const [name, setName] = useState('')// создаем состояние
  const [email, setEmail] = useState('')

  const handleNameChange = (event) => {
    setName(event.target.value)// обновляем сосотояние при вводе
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)// обновляем сосотояние при вводе
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(`Hello, ${name}, your email is ${email}!`)
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="label" htmlFor="name">
        Name:
        <input type="text" id="name" name="name" value={name} onChange={handleNameChange} className="input" />
      </label>

      <label className="label" htmlFor="email">
        Email:
        <input type="text" id="email" name="email" value={email} onChange={handleEmailChange} className="input" />
      </label>
      <button type="submit" className="btn">Submit</button>
    </form>
  )
}


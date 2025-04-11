import React, { useRef } from 'react'

export default function UnControlledForm() {
  const passwordRef = useRef(null) // создаем ref для пароля

  const handleSubmit = (event) => {
    event.preventDefault()
    const password = passwordRef.current.value

// валидация пароля (минимум 6 символов)
    if (password.length >= 6) {
      alert('Password is valid!')
    } else {
      alert('Password must be at least 6 characters long!')
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="label">
        Password:
        <input type="password" ref={passwordRef} className="input" />
      </label>
      <button type="submit" className="btn">Submit</button>
    </form>
  )
}
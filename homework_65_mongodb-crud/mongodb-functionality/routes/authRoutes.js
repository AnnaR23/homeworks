import express from 'express'
import passport from 'passport'
import { createUser, findUserByEmail } from '../users/userModel.js'

const router = express.Router()

// регистрация нового пользователя
router.post('/register', (req, res) => {
  const { email, password } = req.body

  if (findUserByEmail(email)) {
    return res.status(400).json({ message: 'User already exists' })
  }

  createUser(email, password)
  res.status(201).json({ message: 'User registered' })
})

// вход в систему через Passport // 'local' - имя стратегии (логин и пароль вручную)
router.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ message: 'You are logged in' })
})

// выход
router.post('/logout', (req, res, next) => {
  req.logout(err => {
    if (err) return next(err)
    res.json({ message: 'Logout successfully' })
  })
})

export default router
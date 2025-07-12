import passport from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'
import bcrypt from 'bcrypt'
import { findUserByEmail } from '../users/userModel.js'

// Настройка стратегии: (говорим паспорту: "если пришел email и пароль - ищем пользователя")
passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  const user = findUserByEmail(email)
  if (!user) {
    return done(null, false, { message: 'User not found' })
  }

// проверяем пароль с помощью bcrypt
  const isMatch = await bcrypt.compare(password, user.passwordHash)
  if (!isMatch) {
    return done(null, false, { message: 'Wrong Password' })
  }

// все ок - авторизуем
  return done(null, user)
}))

// Сериализация (сохраняем email в сессию)
passport.serializeUser((user, done) => {
  done(null, user.email)
})

// Десериализация (при следующих запросах достаем пользователя по email)
passport.deserializeUser((email, done) => {
  const user = findUserByEmail(email)
  done(null, user)
})
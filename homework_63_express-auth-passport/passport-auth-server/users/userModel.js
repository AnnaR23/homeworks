import bcrypt from 'bcrypt';

const users = []; // здесь храним всех зарегистрированных пользователей

// создание нового пользователя
export function createUser(email, password) {
  const passwordHash = bcrypt.hashSync(password, 10); // хешируем пароль (10 — это уровень сложности (число "раундов" шифрования))
  const user = { email, passwordHash };
  users.push(user);
  return user;
}

// поиск по email
export function findUserByEmail(email) {
  return users.find((user) => user.email === email);
}

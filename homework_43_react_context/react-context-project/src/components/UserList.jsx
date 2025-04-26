import React, { useContext } from 'react';
import UserContext from '../UserContext.jsx';
import UserItem from './UserItem.jsx';

function UserList() {
  // получаем данные из контекста (все пользователи). Второй уровень.
  const users = useContext(UserContext);

  return (
    <div>
      {/*проходим по массиву пользователей и для каждого создаем компонент UserItem */}
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
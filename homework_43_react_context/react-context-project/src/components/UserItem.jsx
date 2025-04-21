import React, {useContext} from 'react';
import UserContext from '../UserContext.jsx';


function UserItem({ user }) {
  const users = useContext(UserContext); // получаем весь массив, чтобы показать доступ на третьем уровне.

  return (
    <div>
    <p><strong>User name:</strong> {user.name}</p>
    <p><em>Total users in the system: {users.length}</em></p>
    </div>
  );
}

export default UserItem;
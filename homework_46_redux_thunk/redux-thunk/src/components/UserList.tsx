import { useSelector, useDispatch } from 'react-redux'; // для получения данных из store
import { useEffect } from 'react';
import { AppDispatch, RootState } from '../redux/store'; // тип RootState для правильной работы useSelector
import UserItem from './UserItem';
import { addUser, fetchUsers } from '../redux/userSlice.ts';
import { v4 as uuidv4 } from 'uuid';


function UserList () {
  // типизированный dispatch, чтобы можно было вызвать асинхронные действия (thunks)
  const dispatch = useDispatch<AppDispatch>();

  // получаем состояние пользователя из Redux
  const { users, loading, error } = useSelector((state: RootState) => state.users);

  // загружаем пользователей с API при первом рендере компонента
  useEffect(() => {
    dispatch(fetchUsers()); // теперь dispatch знает, что fetchUsers - это thunk
  }, [dispatch]);

  // обработчик кнопки добавления нового пользователя
  const handleAddUser = () => {
    const newUser = {
      id: uuidv4(),
      name: `Ùser ${users.length + 1}`,
    };
    dispatch(addUser(newUser));
  };


  return (
    <div>
      {/*кнопка добавления нового пользователя*/}
      <button onClick={handleAddUser}>Add User</button>

      {/*отображение статуса загрузки или ошибки*/}
      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p> }

      {/*проходим по массиву пользователя и отображаем их с помощью компонента UserItem*/}
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
import { useDispatch, useSelector } from 'react-redux' // для получения данных из store
import { RootState } from '../redux/store'; // тип RootState для правильной работы useSelector
import UserItem from './UserItem';
import { addUser } from '../redux/userSlice.ts';
import { v4 as uuidv4 } from 'uuid';


// компонент, отображающий список пользователей
function UserList() {
  const users = useSelector((state: RootState) => state.users.users);// доступ к данным пользователя
  const dispatch = useDispatch();

  // функция для добавления нового пользователя
  const handleAddUser = () => {
    const newUser = {
      id:uuidv4(), // генерируем уникальный id
      name: `User ${users.length + 1}`,
    };
    dispatch(addUser(newUser)); // отправляем экшен
  };


  return (
    <div>
      {/*кнопка для добавления нового пользователя*/}
      <button onClick={handleAddUser}>Add User</button>
      {/*проходим по массиву пользователя и отображаем их с помощью компонента UserItem*/}
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
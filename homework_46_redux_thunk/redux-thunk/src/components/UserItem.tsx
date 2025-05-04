import { useDispatch } from 'react-redux';
import { removeUser} from '../redux/userSlice.ts';


// тип данных пользователя
interface User {
  id: string;
  name: string;
}

interface UserItemProps {
  user: User; //получаем пользователя через пропсы
}

// компонент для отображения одного пользователя
function UserItem({ user }: UserItemProps) {
  const dispatch = useDispatch();

  // функция удаления пользователя
  const handleRemove = () => {
    dispatch(removeUser(user.id));
  };


  return (
    <div>
      <p><strong>User name:</strong> {user.name}</p>
      {/*кнопка для удаления пользователя*/}
      <button onClick={handleRemove}>Delete</button>
    </div>
  );
}

export default UserItem;

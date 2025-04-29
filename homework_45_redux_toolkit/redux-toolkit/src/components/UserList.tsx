import { useSelector } from 'react-redux'; // для получения данных из store
import { RootState } from '../redux/store'; // тип RootState для правильной работы useSelector
import UserItem from '../components/UserItem';


function UserList() {
  const users = useSelector((state: RootState) => state.users.users);// доступ к данным пользователя

  return (
    <div>
      {/*проходим по массиву пользователя и отображаем их с помощью компонента UserItem*/}
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
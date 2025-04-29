
// тип данных для пользователя
interface User {
  id: string;
  name: string;
}

interface UserItemProps {
  user: User; //получаем пользователя через пропсы
}

function UserItem({ user }: UserItemProps) {
  return (
    <div>
      <p><strong>User name:</strong> {user.name}</p>
    </div>
  );
}

export default UserItem;

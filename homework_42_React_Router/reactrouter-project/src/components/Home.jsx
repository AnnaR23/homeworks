import { useNavigate } from 'react-router'

const Home = () => {
  document.title = 'Home'; // устанавливаем заголовок вкладки браузера

  const navigate = useNavigate();// функцию для перехода между страницами вручную

  const goToContacts = () => {
    navigate('/contact');// програмно переходим на contact
  };

  return (
    <div>
      <h2>This is the HOME page</h2>
      <button onClick={goToContacts}>Go to contacts</button>
    </div>
  );
};

export default Home
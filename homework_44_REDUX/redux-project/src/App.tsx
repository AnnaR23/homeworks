import './App.css'
import UserList from './components/UserList'
import AddUserForm from './components/AddUserForm.tsx'


function App() {
  return (
    <div>
      <h1>List of Users</h1>
      <AddUserForm />
      <UserList />
    </div>
  )
}

export default App


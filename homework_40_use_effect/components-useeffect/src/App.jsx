import './App.css'
import ControlledForm from './components/ControlledForm.jsx'
import UnControlledForm from './components/UnControlledForm.jsx'
import DataFetchingComponent from './components/UseEffectComponent.jsx'


function App() {

  return (
    <div className="container">
      <h1>React Forms & Data</h1>

      <section className="section">
        <h2>1. Controlled Form</h2>
        <ControlledForm />
      </section>

      <section className="section">
        <h2>2. Uncontrolled Form</h2>
        <UnControlledForm />
      </section>

      <section className="section">
        <h2>3. Data from Server</h2>
        <DataFetchingComponent />
      </section>
    </div>
  )
}

export default App

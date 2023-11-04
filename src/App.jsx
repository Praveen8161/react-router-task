import './App.css'
import { Route,Routes } from 'react-router-dom'
import All from './Pages/All'
import NoPage from './Pages/NoPage'
import FullStackDevelopment from './Pages/FullStackDevelopment'
import DataScience from './Pages/DataScience'
import CyberSecurity from './Pages/CyberSecurity'
import Career from './Pages/Career'

function App() {

  return (
    <div>
      <Routes>
        <Route exact path='/' element={<All/>} />
        <Route exact path='/full-stack-developement' element={<FullStackDevelopment/>} />
        <Route exact path='/data-science' element={<DataScience/>} />
        <Route exact path='/cyber-security' element={<CyberSecurity/>} />
        <Route exact path='/career' element={<Career/>} />
        <Route exact path='*' element={<NoPage />} />
      </Routes>
    </div>
  )
}

export default App

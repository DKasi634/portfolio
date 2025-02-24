
import { Route,   Routes } from 'react-router-dom'
import './App.css'
import MainNavigation from './routes/main-navigation.route'
import HomePage from './pages/home.page'

function App() {

  return (
    <Routes>
      <Route path='' element={<MainNavigation/>}>
        <Route index element={<HomePage/>}/>
      </Route>
    </Routes>
  )
}

export default App


import { Route,   Routes } from 'react-router-dom'
import './App.css'
import MainNavigation from './routes/main-navigation.route'
import HomePage from './pages/home.page'
import NotFoundPage from './pages/not-found.page'

function App() {

  return (
    <Routes>
      <Route path='' element={<MainNavigation/>}>
        <Route index element={<HomePage/>}/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Route>
    </Routes>
  )
}

export default App

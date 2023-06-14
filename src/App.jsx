import './App.css'
import { Route,Routes} from 'react-router-dom'
import Register  from './registration'
import Login from './login'
import Home from './home'



function App() {

  return (
    <>



    <Routes>
      <Route path='/' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>



    </Routes>
     
    </>
  )
}

export default App

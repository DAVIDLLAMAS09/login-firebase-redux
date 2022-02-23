import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import PrivateRoutes from './components/PrivateRoutes';
import Home from './components/Home'
import Login from './components/Login';
import Register from './components/Register'
import Counter from './components/Counter'


// alternative to persist user on aplication, in this case use redux persist reducers data on store

// useEffect(()=>{
//   auth.onAuthStateChanged((user)=>{
//     user ? dispatch(setUser(user)) : dispatch(null)
//   })
// })
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} index/>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/counter' 
               element={
                 <PrivateRoutes>
                    <Counter />
                 </PrivateRoutes>
               }/>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;

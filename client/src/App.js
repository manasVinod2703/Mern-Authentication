import React from 'react'
import { Register,Profile,Home } from './pages';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import ProtectedRoute from './pages/ProtectedRoute';
function App() {
  return (
    <div>
           <BrowserRouter>
           <Routes>
                 <Route path = '/'  element = {<Home/>}/>
                 <Route path = '/register'  element = {<Register/>}/>
                 <Route path = '/profile'  element = {<ProtectedRoute><Profile/></ProtectedRoute>}/>
           </Routes>
           </BrowserRouter>
    </div>
  );
}

export default App;

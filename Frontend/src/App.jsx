import React from 'react'
import Home from './home/Home'

import { Navigate, Route, Routes } from "react-router-dom"
import Courses from './courses/Courses'
import Contacts from './contact/Contacts'
import Signup from './components/Signup'
import { Toaster } from "react-hot-toast";
import { useAuth } from './context/AppProvider'
import Abouts from './about/Abouts'

function App() {
  const [authUser,setAuthUser]=useAuth()
  console.log(authUser);
  return (
<>
{/* <Home/>
<Course/> */}
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/course' element={authUser ? <Courses /> : <Navigate to="/singnup" />}/> 
  <Route path='/contact' element={<Contacts/>}/>
  <Route path='/singnup' element={<Signup/>}/>
  <Route path='/about' element={<Abouts/>}/>
 
</Routes>
<Toaster/>

</>
  )
}

export default App
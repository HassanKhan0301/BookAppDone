import React from 'react'
import { useAuth } from '../context/AppProvider'
import User from '../../../Backend/model/user.model'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser,setAuthUser]=useAuth()
    const handleLogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                User:null
            })
            localStorage.removeItem("Users")
            toast.success("logout successfully");
            setTimeout(() => {
                window.location.reload();
              }, 3000);
        } catch (error) {
            toast.error("Error :"+ error)
            setTimeout(() => {}, 2000);
        }
    }
  return (
    <div>     
        
         <button
    className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
    onClick={handleLogout}
  
  >
    Logout
  </button></div>
  )
}

export default Logout
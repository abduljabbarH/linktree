import { FormEvent } from "react";
import { useAuth } from "../../authentication/Auth"
import { useNavigate } from "react-router-dom";

export default function Home (){
  const logout = useAuth().logout();
  const navigate = useNavigate()
  const submitLogout = async (e: FormEvent) => {
    e.preventDefault();
    await logout.then(() => {
      sessionStorage.removeItem('authToken')
      navigate('/login')
    });
  }
  
  

  return (
    <button onClick={submitLogout}>LogOut</button>
  )
}
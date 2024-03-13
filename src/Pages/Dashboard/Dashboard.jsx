// import Logo from "../../Components/Logo";
import { useContext} from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import { useEffect } from "react";

import MainArea from "../../Components/MainArea/MainArea";

import Sidebar from "../../Components/sidebar/Sidebar";


export default function DashboardLayout({ children }) {
  const { isAuthenticated} = useContext(AuthContext);
  
  const Nav = useNavigate();
  useEffect(()=> {
    if (!isAuthenticated){
      Nav("/login") 
    }
    
  }, [])
  
  return (
    <>
      <div className="flex">
        <Sidebar />
        <MainArea>{children}</MainArea>
      </div>
    </>
  );
}

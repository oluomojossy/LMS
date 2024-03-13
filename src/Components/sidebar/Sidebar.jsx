import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import SidebarMenuData from "../../data/SideBarMenu";
import { Modal } from "antd";
import { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";


export default function Sidebar() {
  const menu = SidebarMenuData;
  const location = useLocation();
  const [loggedOut, isLoggedOut] = useState(false);
  const nav = useNavigate();
  const name = JSON.parse(localStorage.getItem("user"))?.Username;

  const showLogOutModal = () => {
    isLoggedOut(true);
  };
  const handleLogout = () => {
    nav("/");
    console.log("clicked");
    isLoggedOut(false);
    localStorage.removeItem("userToken")
  };

  return (
    <>
      <aside className="sidebar w-[250px]">
        <NavLink to="/">
        <div className="sidebar__brand flex items-center justify-center  bg-white px-4 py-2">
         
         <img
          src={logo}
          alt="plaintiffaid logo"
          className="w-full h-10  flex items-center justify-center "
        />
      </div>
        </NavLink>
       

        <div className=" sidebar__menu__container rounded-tr-[40px] mt-7 h-full pt-4  bg-blue-900">
          <div className="container">
            <ul className="mb-6 flex flex-col justify-center  w-full ">
              {menu.map((menuItem) => (
                <li
                  key={menuItem.id}
                  className="text-white "
                  style={{
                    color:
                      location.pathname === menuItem.path
                        ? "#55dbcb"
                        : "#ffffff",
                  }}
                >
                  <NavLink
                    to={menuItem.path}
                    className="group relative cursor-pointer flex items-center  gap-3 rounded-sm py-2 px-3 text-[15px]  w-full  capitalize whitespace-nowrap h-10  duration-300 ease-in-out hover:bg-[white] hover:text-blue-900"
                  >
                    {menuItem.icon}
                    {menuItem.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="cursor-pointer flex items-center  gap-4 rounded-sm py-2 px-7 text-[15px]  w-full  capitalize ">
              <AiOutlineLogout  style={{fontSize:"20px"}} className="text-white"/>
              <p className="text-white" onClick={showLogOutModal}>
                Log Out
              </p>
            </div>
          </div>
        </div>
      </aside>
      <Modal
        open={loggedOut}
        onOk={handleLogout}
        onCancel={() => isLoggedOut(false)}
        okButtonProps={{
          className: "bg-blue-900 text-white rounded w-10 text-sm   px-2",
          size: "small",
        }}
        okText="Yes"
        cancelButtonProps={{ hidden: true }}
      >
        <h1>
          <p className="text-red-700">Are you sure you want to log out ?</p>
          {name}
        </h1>
      </Modal>
    </>
  );
}

import React from "react";

export default function SideDrawer({ isOpenDrawer, content }) {
  const containerClass = isOpenDrawer
    ? "w-[83.5%] h-[94vh] flex fixed top-[70px] right-0 bg-black bg-opacity-50 transform translate-x-0 transition-transform duration-500 ease-in-out"
    : "fixed top-16 right-0 w-3/4 h-full bg-black bg-opacity-50  transform translate-x-full transition-transform duration 300 ease-in-out ";

  return (
    <>
      <div className={containerClass}>
        <div className="w-[71%] h-full cursor-not-allowed"></div>
        <div className="w-[24rem] h-full flex flex-col bg-white overflow-y-auto px-2">
            {content()}
        </div>
      </div>
    </>
  );
}

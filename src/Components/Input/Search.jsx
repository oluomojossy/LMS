import { IoIosSearch } from "react-icons/io";
import React from "react";

export default function Search({ onChange, value }) {
  return (
    <div className="flex mb-3 ">
      <div className=" h-full  w-60 flex items-center gap-2 sm:gap-4 relative ">
        <IoIosSearch className="absolute text-base left-4" />
        <input
          className="searchInput  text-base rounded-lg outline-none  w-full placeholder-[black] pl-10"
          placeholder="search for keyword"
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
}

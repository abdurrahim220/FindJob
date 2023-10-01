import React from "react";

import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const SearchDiv = () => {
  return (
    <div className="searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]">
      <from action="">
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-5 bg-white p-5 shadow-lg shadow-grayIsh-700">
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              type="text"
              name=""
              className="bg-transparent w-full text-blue-500"
              id=""
              placeholder="Search Job here...."
            />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
          </div>

          <div className="flex gap-2 items-center">
            <BsHouseDoor className="text-[25px] icon" />
            <input
              type="text"
              name=""
              className="bg-transparent w-full text-blue-500"
              id=""
              placeholder="Search By company here...."
            />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
          </div>

          <div className="flex gap-2 items-center">
            <CiLocationOn className="text-[25px] icon" />
            <input
              type="text"
              name=""
              className="bg-transparent w-full text-blue-500"
              id=""
              placeholder="Search by location...."
            />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
          </div>

          <input
            type="submit"
            className="bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300"
            value="Search"
          />
        </div>
      </from>

      <div className="secDiv flex justify-center item-center gap-2">

        <label htmlFor="relevance" className="text-[#808080] font-semibold">Sort by:</label>
        <select name="" id="relevance" className="bg-white rounded-[3px] px-4 py-1">
          <option value="">Relevance</option>
          <option value="">Inclusive</option>
          <option value="">Starts With</option>
          <option value="">Contains</option>
        </select>

        <label htmlFor="relevance" className="text-[#808080] font-semibold">Type:</label>
        <select name="" id="relevance" className="bg-white rounded-[3px] px-4 py-1">
          <option value="">Full-time</option>
          <option value="">Remote</option>
          <option value="">Contact</option>
          <option value="">Part-time</option>
        </select>

        <label htmlFor="relevance" className="text-[#808080] font-semibold">Sort by:</label>
        <select name="" id="relevance" className="bg-white rounded-[3px] px-4 py-1">
          <option value="">Relevance</option>
          <option value="">Inclusive</option>
          <option value="">Starts With</option>
          <option value="">Contains</option>
        </select>


      </div>


    </div>
  );
};

export default SearchDiv;

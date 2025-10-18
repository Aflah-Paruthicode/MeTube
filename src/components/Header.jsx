import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [suggestions,setSuggestions] = useState([])
  const [showSuggestions,setShowSuggestions] = useState(false)
  const togggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const chachedData =  useSelector(store => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if(chachedData[searchText]) {
        setSuggestions(chachedData[searchText]);
      } else {
        getSearchSuggestions()
      }
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);

  const getSearchSuggestions = async () => {
    const data = await fetch(SEARCH_API + searchText);
    const json = await data.json(); 
    console.log(json[1]);
    setSuggestions(json[1]);
    dispatch(cacheResults({[searchText] : json[1]}))
  };

  return (
    <div className="grid grid-cols-12 w-full h-[70px] px-5 fixed top-0 bg-white z-[999999999]">
      <div className="col-span-1 grid grid-cols-10">
        <svg
          onClick={togggleMenuHandler}
          className="col-span-2 m-auto cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
        <div className="col-span-8 m-auto">
          <img src="/logo.png" alt="" />
        </div>
      </div>
      <div className="col-span-10 m-auto font-normal ">
        <input
          className="border w-[500px] px-5 py-[3px] rounded-l-full border-r-0 outline-blue-400 outline-1"
          type="search"
          placeholder="search..."
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        { showSuggestions && <div className="absolute w-[500px] bg-white px-2 py-2 rounded-2xl shadow-2xl mt-2">
          <ul className="font-semibold"> 
          {suggestions.map((sugg,ind) => 
            <li key={ind} className="flex text-[14px] hover:bg-gray-200 py-2 px-4 rounded-lg"> 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="25px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="#00000"
              >
                <path d="M792-120.67 532.67-380q-30 25.33-69.64 39.67Q423.39-326 378.67-326q-108.44 0-183.56-75.17Q120-476.33 120-583.33t75.17-182.17q75.16-75.17 182.5-75.17 107.33 0 182.16 75.17 74.84 75.17 74.84 182.27 0 43.23-14 82.9-14 39.66-40.67 73l260 258.66-48 48Zm-414-272q79.17 0 134.58-55.83Q568-504.33 568-583.33q0-79-55.42-134.84Q457.17-774 378-774q-79.72 0-135.53 55.83-55.8 55.84-55.8 134.84t55.8 134.83q55.81 55.83 135.53 55.83Z" />
              </svg>
              {sugg}
            </li>
          )}
          </ul>
        </div>}
        <button className="border px-6 rounded-r-full py-[3px] my-auto">
          Search
        </button>
        <button className="border rounded-full p-[3px] mx-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#00000"
          >
            <path d="M480-400q-50 0-85-35t-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35Zm0-240Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm40-360q17 0 28.5-11.5T520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480Z" />
          </svg>
        </button>
      </div>
      <div className="col-span-1 grid grid-cols-10 m-auto">
        <p className="col-span-4 m-auto">Create</p>
        <svg
          className="col-span-3 m-auto"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#00000"
        >
          <path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z" />
        </svg>
        <img
          className="col-span-3 w-10"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;

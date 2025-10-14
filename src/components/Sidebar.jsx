import React from "react";
import { SideBarOptions } from "../utils/constants";

const Sidebar = () => {
  return (
    <div className="w-[14rem] overflow-y-scroll">
      <div className="flex gap-6 mx-5 py-[8px] px-2 hover:bg-[#dcdcdc] rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#00000"
        >
          <path d="M240-200h133.85v-237.69h212.3V-200H720v-360L480-740.77 240-560v360Zm-60 60v-450l300-225.77L780-590v450H526.15v-237.69h-92.3V-140H180Zm300-330.38Z" />
        </svg>
        <h1>Home</h1>
      </div>
      <div className="flex gap-6 mx-5 py-[8px] px-2 hover:bg-[#dcdcdc] rounded-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#00000"
        >
          <path d="M172.31-100Q142-100 121-121q-21-21-21-51.31v-375.38Q100-578 121-599q21-21 51.31-21h615.38Q818-620 839-599q21 21 21 51.31v375.38Q860-142 839-121q-21 21-51.31 21H172.31Zm0-60h615.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-375.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v375.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM410-218.46 622.31-360 410-501.54v283.08ZM170-675.38v-60h620v60H170Zm120-115.39v-60h380v60H290ZM160-160v-400 400Z" />
        </svg>
        <h1>Subscriptions</h1>
      </div>

      {SideBarOptions.map((option) => (
        <div>
          {option.name && <p className="ml-6 text-[18px] font-semibold py-3">{option.name}</p>}
          {option.options.map((button) => (
            <div className="flex gap-6 mx-5 py-[8px] px-2 hover:bg-[#dcdcdc] rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#00000"
              >
                <path d={button.icon} />
              </svg>
              <h1>{button.name}</h1>
            </div>
          ))}
        <hr className="text-[#dbdada] my-1" />
        </div>
      ))}
    </div>
  );
};

export default Sidebar;

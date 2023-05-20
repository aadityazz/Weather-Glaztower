import React, { useState } from "react";
import { UilSearch } from "@iconscout/react-unicons";

function Inputs({ setQuery }) {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };


  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-2/3 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for city...."
          className="text-xl font-light p-2 w-3/5 shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
      </div>

      <div className="flex flex-row w-12 items-center justify-center">
        <div
          name="metric"
          className="text-xl text-white font-light transition ease-out hover:scale-150"
        >
          °C
        </div>

      </div>
    </div>
  );
}

export default Inputs;

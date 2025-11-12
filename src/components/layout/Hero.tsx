import { useState } from "react";
import Search from "../icons/Search";

interface HeroProps {
  onCityChange: (city: string) => void;
}

export default function Hero({ onCityChange }: HeroProps) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city) {
      onCityChange(city);
      setCity("");
    }
  };

  return (
    <div className="flex flex-col items-center w-full px-4 my-8 font-bold">
      <h1 className="text-6xl text-center font-black">
        How's the sky looking today?
      </h1>
      <div className="flex flex-col md:w-1/2 w-full justify-center md:flex-row gap-4 mt-10">
        <div className="flex flex-1 w- items-center gap-2 bg-neutral-700 rounded-md">
          <Search className="ml-3" strokeWidth={10} />
          <input
            type="text"
            placeholder="Search for a place..."
            className="py-2.5 no-underline focus:no-underline outline-none w-full pr-4"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <button className="bg-blue-700" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}
 
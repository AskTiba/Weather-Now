import { useState } from "react";
import Cog from "../icons/Cog";
import Dropdown from "../common/Dropdown/Dropdown";
import { logo } from "../../assets/images";

export default function Navbar() {
  const [selectedUnit, setSelectedUnit] = useState("Units");

  const unitOptions = ["Celsius", "Fahrenheit"];

  const handleDaySelect = (unit: string) => {
    setSelectedUnit(unit);
    // In a real application, you would fetch new hourly data based on the selected day here.
  };

  const displayIcon =
    selectedUnit === "Units" ? <Cog fill="#fff" width={20} /> : null;

  return (
    <main className="flex justify-between items-center px-4 py-2">
      <div className="">
        <img src={logo} alt="" className="w-40" />
      </div>
      <div className="flex items-center gap-1">
        <Dropdown
          options={unitOptions}
          selectedValue={selectedUnit}
          onSelect={handleDaySelect}
          className=""
          icon={displayIcon}
        />{" "}
      </div>
    </main>
  );
}

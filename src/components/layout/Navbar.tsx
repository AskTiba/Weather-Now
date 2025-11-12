import Cog from "../icons/Cog";
import Dropdown from "../common/Dropdown/Dropdown";
import { logo } from "../../assets/images";

interface NavbarProps {
  onUnitChange: (unit: string) => void;
  selectedUnit: string;
}

export default function Navbar({ onUnitChange, selectedUnit }: NavbarProps) {
  const unitOptions = ["Celsius", "Fahrenheit"];

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
          onSelect={onUnitChange}
          className=""
          icon={displayIcon}
        />{" "}
      </div>
    </main>
  );
}

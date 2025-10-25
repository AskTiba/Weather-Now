import React, { useState } from "react";
import DownCaret from "../../icons/DownCaret";

interface DropdownProps {
  options: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
  className?: string;
  icon?: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedValue,
  onSelect,
  className,
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        className="bg-neutral-600 hover:bg-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-opacity-75 px-1 py-0.5 rounded-lg flex items-center gap-2 w-full justify-between transition-all duration-200 ease-in-out"
        onClick={() => setIsOpen(!isOpen)}
      >
        {icon && icon}
        <span className="text-white text-base font-medium">
          {selectedValue}
        </span>
        <DownCaret
          fill="#fff"
          className={`size-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <ul className="absolute z-10 w-full bg-neutral-600 rounded-lg mt-2 shadow-xl max-h-60 overflow-auto ring-1 ring-black ring-opacity-5 animate-fade-in-down">
          {options.map((option) => (
            <li
              key={option}
              className="px-4 py-2 text-white text-base hover:bg-neutral-500 cursor-pointer transition-colors duration-150 ease-in-out first:rounded-t-lg last:rounded-b-lg"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

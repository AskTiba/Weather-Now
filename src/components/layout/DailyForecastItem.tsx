import React from "react";

interface DailyForecastItemProps {
  day: string;
  icon: string; // Path to the icon image
  altText: string;
  maxTemperature: number;
  minTemperature: number;
}

const DailyForecastItem: React.FC<DailyForecastItemProps> = ({
  day,
  icon,
  altText,
  maxTemperature,
  minTemperature,
}) => {
  return (
    <div className="bg-neutral-700 rounded-md p-3 flex flex-col items-center">
      <h3 className="">{day}</h3>
      <img src={icon} alt={altText} className="" />
      <div className="flex justify-between w-full">
        <p className="">{maxTemperature}°</p>
        <p className="">{minTemperature}°</p>
      </div>
    </div>
  );
};

export default DailyForecastItem;

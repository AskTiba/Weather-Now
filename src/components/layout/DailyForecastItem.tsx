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
    <div className="bg-neutral-800 rounded-xl p-4 md:p-3 flex flex-row md:flex-col justify-between items-center gap-2 font-semibold">
      <h3 className="w-10 text-left md:text-center md:w-auto">{day}</h3>
      <img src={icon} alt={altText} className="size-12" />
      <div className="flex flex-row md:justify-between w-16 md:w-full gap-2 text-right md:text-center">
        <p className="text-neutral-0">
          {maxTemperature}°
        </p>
        <p className="text-neutral-300">
          {minTemperature}°
        </p>
      </div>
    </div>
  );
};

export default DailyForecastItem;

import React from "react";

interface DailyForecastItemProps {
  day: string;
  icon: string; // Path to the icon image
  altText: string;
  maxTemperature: number;
  minTemperature: number;
  unit: string;
}

const DailyForecastItem: React.FC<DailyForecastItemProps> = ({
  day,
  icon,
  altText,
  maxTemperature,
  minTemperature,
  unit,
}) => {
  return (
    <div className="bg-neutral-800 rounded-xl p-3 flex flex-col items-center gap-2 font-semibold">
      <h3 className="">{day}</h3>
      <img src={icon} alt={altText} className="size-12" />
      <div className="flex justify-between w-full gap-2">
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

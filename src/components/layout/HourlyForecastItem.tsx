import React from "react";

interface HourlyForecastItemProps {
  time: string;
  temperature: number;
  icon: string; // This will be the path to the icon image
  altText: string;
}

const HourlyForecastItem: React.FC<HourlyForecastItemProps> = ({
  time,
  temperature,
  icon,
  altText,
}) => {
  return (
    <section className="flex items-center w-full justify-between bg-neutral-600 rounded-md px-3 py-1">
      <div className="flex items-center gap-2">
        <img src={icon} alt={altText} className="size-10" />
        <h3 className="mt-1">{time}</h3>
      </div>
      <p className="">{temperature}°</p>
    </section>
  );
};

export default HourlyForecastItem;

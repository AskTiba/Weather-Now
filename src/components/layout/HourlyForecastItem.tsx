import React from "react";

interface HourlyForecastItemProps {

  time: string;

  temperature: number;

  icon: string; // This will be the path to the icon image

  altText: string;

  unit: string;

}

const HourlyForecastItem: React.FC<HourlyForecastItemProps> = ({
  time,
  temperature,
  icon,
  altText,
  unit,
}) => {
  return (
    <section className="flex items-center w-full justify-between bg-neutral-700 rounded-xl px-4 py-1.5 font-semibold">
      <div className="flex items-center gap-3">
        <img src={icon} alt={altText} className="size-10" />
        <h3 className="mt-1">{time}</h3>
      </div>
      <p className="text-xl">
        {temperature}°
      </p>
    </section>
  );
};

export default HourlyForecastItem;

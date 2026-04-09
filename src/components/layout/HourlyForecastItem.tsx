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
    <section className="bg-neutral-700 rounded-2xl md:rounded-xl p-4 md:px-4 md:py-1.5 flex flex-col md:flex-row items-center md:w-full justify-between font-semibold min-w-[80px] md:min-w-0 shrink-0 snap-start gap-2 md:gap-0">
      <h3 className="md:hidden opacity-70 text-sm whitespace-nowrap">{time}</h3>
      <div className="flex items-center md:gap-3">
        <img src={icon} alt={altText} className="size-10" />
        <h3 className="hidden md:block mt-1">{time}</h3>
      </div>
      <p className="text-xl md:text-xl">
        {temperature}°
      </p>
    </section>
  );
};

export default HourlyForecastItem;

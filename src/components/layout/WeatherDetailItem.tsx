import React from "react";

interface WeatherDetailItemProps {
  title: string;
  value: string | number;
}

const WeatherDetailItem: React.FC<WeatherDetailItemProps> = ({
  title,
  value,
}) => {
  return (
    <div className="bg-neutral-800 rounded-2xl flex flex-col p-5 gap-4">
      <h3 className="text-sm font-semibold text-neutral-300">{title}</h3>
      <p className="text-4xl font-semibold">{typeof value === 'number' ? `${value}°` : value}</p>
    </div>
  );
};

export default WeatherDetailItem;

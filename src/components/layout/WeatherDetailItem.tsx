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
    <div className="bg-neutral-700 rounded-md flex flex-col p-5 gap-4">
      <h3 className="">{title}</h3>
      <p className="text-3xl font-semibold">{typeof value === 'number' ? `${value}°` : value}</p>
    </div>
  );
};

export default WeatherDetailItem;

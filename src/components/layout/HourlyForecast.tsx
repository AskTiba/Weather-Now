import { useState } from "react";
import HourlyForecastItem from "./HourlyForecastItem";
import { iconPartlyCloudy, iconRain, iconSunny } from "../../assets/images";
import Dropdown from "../common/Dropdown/Dropdown";

export default function HourlyForecast() {
  const [selectedDay, setSelectedDay] = useState("Tuesday");

  const dayOptions = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const handleDaySelect = (day: string) => {
    setSelectedDay(day);
    // In a real application, you would fetch new hourly data based on the selected day here.
  };

  const hourlyData = [
    {
      time: "3pm",
      temperature: 20,
      icon: iconPartlyCloudy,
      altText: "Partly Cloudy",
    },
    { time: "4pm", temperature: 21, icon: iconSunny, altText: "Sunny" },
    { time: "5pm", temperature: 19, icon: iconRain, altText: "Rain" },
    {
      time: "6pm",
      temperature: 18,
      icon: iconPartlyCloudy,
      altText: "Partly Cloudy",
    },
    {
      time: "7pm",
      temperature: 17,
      icon: iconPartlyCloudy,
      altText: "Partly Cloudy",
    },
    { time: "8pm", temperature: 16, icon: iconRain, altText: "Rain" },
    {
      time: "9pm",
      temperature: 15,
      icon: iconPartlyCloudy,
      altText: "Partly Cloudy",
    },
    { time: "10pm", temperature: 14, icon: iconSunny, altText: "Sunny" },
  ];

  return (
    <main className="px-4 mb-8 mt-4">
      <article className="bg-neutral-700 p-4 rounded-2xl">
        <div className="mb-3 flex items-center w-full justify-between">
          <h3 className="">Hourly forecast</h3>
          <Dropdown
            options={dayOptions}
            selectedValue={selectedDay}
            onSelect={handleDaySelect}
            className="w-32"
          />
        </div>
        <div className="grid grid-cols-1 gap-3">
          {hourlyData.map((item, index) => (
            <HourlyForecastItem
              key={index}
              time={item.time}
              temperature={item.temperature}
              icon={item.icon}
              altText={item.altText}
            />
          ))}
        </div>
      </article>
    </main>
  );
}

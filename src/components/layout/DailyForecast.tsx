import DailyForecastItem from "./DailyForecastItem";
import { iconRain, iconSunny, iconPartlyCloudy } from "../../assets/images";

export default function DailyForecast() {
  const dailyData = [
    {
      day: "Tue",
      icon: iconRain,
      altText: "Rain",
      maxTemperature: 20,
      minTemperature: 14,
    },
    {
      day: "Wed",
      icon: iconSunny,
      altText: "Sunny",
      maxTemperature: 22,
      minTemperature: 15,
    },
    {
      day: "Thu",
      icon: iconPartlyCloudy,
      altText: "Partly Cloudy",
      maxTemperature: 18,
      minTemperature: 10,
    },
    {
      day: "Fri",
      icon: iconRain,
      altText: "Rain",
      maxTemperature: 19,
      minTemperature: 12,
    },
    {
      day: "Sat",
      icon: iconSunny,
      altText: "Sunny",
      maxTemperature: 23,
      minTemperature: 16,
    },
    {
      day: "Sun",
      icon: iconPartlyCloudy,
      altText: "Partly Cloudy",
      maxTemperature: 21,
      minTemperature: 13,
    },
    {
      day: "Mon",
      icon: iconRain,
      altText: "Rain",
      maxTemperature: 17,
      minTemperature: 9,
    },
  ];

  return (
    <main className="my-8 px-4">
      <h1 className="my-3">Daily Forecast</h1>
      <section className="grid grid-cols-3 md:grid-cols-7 gap-4">
        {dailyData.map((item, index) => (
          <DailyForecastItem
            key={index}
            day={item.day}
            icon={item.icon}
            altText={item.altText}
            maxTemperature={item.maxTemperature}
            minTemperature={item.minTemperature}
          />
        ))}
      </section>
    </main>
  );
}

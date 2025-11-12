import {
  bgTodayLarge,
  bgTodaySmall,
  iconDrizzle,
  iconFog,
  iconOvercast,
  iconPartlyCloudy,
  iconRain,
  iconSnow,
  iconStorm,
  iconSunny,
} from "../../assets/images";
import WeatherDetailItem from "./WeatherDetailItem";

interface CityWeatherProps {
  weatherData: any;
  unit: string;
}

export default function CityWeather({ weatherData, unit }: CityWeatherProps) {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const currentDate = new Date();
  const formatedDate = currentDate.toLocaleDateString(undefined, options);

  const weatherIcons: { [key: string]: string } = {
    "01d": iconSunny,
    "01n": iconSunny,
    "02d": iconPartlyCloudy,
    "02n": iconPartlyCloudy,
    "03d": iconOvercast,
    "03n": iconOvercast,
    "04d": iconOvercast,
    "04n": iconOvercast,
    "09d": iconDrizzle,
    "09n": iconDrizzle,
    "10d": iconRain,
    "10n": iconRain,
    "11d": iconStorm,
    "11n": iconStorm,
    "13d": iconSnow,
    "13n": iconSnow,
    "50d": iconFog,
    "50n": iconFog,
  };

  const weatherDetails = [
    {
      title: "Feels like",
      value: `${Math.round(weatherData.main.feels_like)}°`,
    },
    { title: "Humidity", value: `${weatherData.main.humidity}%` },
    {
      title: "Wind Speed",
      value: `${weatherData.wind.speed} ${
        unit === "metric" ? "km/h" : "mph"
      }`,
    },
    { title: "Precipitation", value: `${weatherData.rain?.["1h"] || 0} mm` },
  ];

  return (
    <>
      <div
        className="m-4 flex flex-col gap-2 rounded-lg bg-cover bg-center bg-no-repeat py-8 md:px-5 md:py-9 weather-bg min-h-[200px]"
        style={{
          "--bg-small": `url(${bgTodaySmall})`,
          "--bg-large": `url(${bgTodayLarge})`,
          backgroundImage: "var(--bg-small)",
        }}
      >
        <div className="md:flex md:justify-between z-0 md:items-center  md:w-full">
          <section className="flex flex-col items-center md:items-start">
            <h2 className="text-white font-semibold text-4xl">
              {weatherData.name}, {weatherData.sys.country}
            </h2>
            <p className="">{formatedDate}</p>
          </section>
          <div className="flex items-center">
            <img
              src={weatherIcons[weatherData.weather[0].icon]}
              alt={weatherData.weather[0].description}
              className="size-36"
            />
            <p className="text-8xl">{Math.round(weatherData.main.temp)}°</p>
          </div>
        </div>
      </div>
      <section className="grid grid-cols-2 md:grid-cols-4 px-4 mb-8 gap-4">
        {weatherDetails.map((item, index) => (
          <WeatherDetailItem
            key={index}
            title={item.title}
            value={item.value}
          />
        ))}
      </section>
    </>
  );
}

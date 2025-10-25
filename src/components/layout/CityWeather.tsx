import { iconSunny } from "../../assets/images";
import WeatherDetailItem from "./WeatherDetailItem";

export default function CityWeather() {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const currentDate = new Date();
  const formatedDate = currentDate.toLocaleDateString(undefined, options);

  const weatherDetails = [
    { title: "Feels like", value: 18 },
    { title: "Humidity", value: "60%" },
    { title: "Wind Speed", value: "15 km/h" },
    { title: "Precipitation", value: "0 mm" },
  ];

  return (
    <>
      <div className="bg-blue-700 m-4 flex flex-col gap-2 rounded-lg md:px-5 items-center py-8 md:py-9">
        <div className="md:flex md:justify-between md:items-center  md:w-full">
          <section className="flex flex-col items-center md:items-start">
            <h2 className="text-white font-semibold text-4xl">
              Berlin, Germany
            </h2>
            <p className="">{formatedDate}</p>
          </section>
          <div className="flex items-center">
            <img src={iconSunny} alt="" className="size-36" />
            <p className="text-8xl">20°</p>
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

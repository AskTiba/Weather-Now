import Search from "../icons/Search";

export default function Hero() {
  return (
    <div className=" text-center px-4 my-8 font-bold">
      <p className="text-6xl font-gr">How's the sky looking today?</p>
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
        <div className="flex items-center gap-2 bg-neutral-700 rounded-md">
          <div className="ml-3">
            <Search strokeWidth={10} />
          </div>
          <input
            type="text"
            placeholder="Search for a place..."
            className="py-2.5 no-underline focus:no-underline outline-none w-full pr-4"
          />
        </div>
        <button className="bg-blue-700">Search</button>
      </div>
    </div>
  );
}

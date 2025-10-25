import Search from "../icons/Search";

export default function Hero() {
  return (
    <div className="flex flex-col items-center w-full px-4 my-8 font-bold">
      <h1 className="text-6xl text-center font-black">How's the sky looking today?</h1>
      <div className="flex flex-col md:w-1/2 w-full justify-center md:flex-row gap-4 mt-10">
        <div className="flex flex-1 w- items-center gap-2 bg-neutral-700 rounded-md">
          <Search className="ml-3" strokeWidth={10} />
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
 
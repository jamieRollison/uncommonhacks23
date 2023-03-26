import Envelope from "../assets/1.png";
function HomeLoad() {
  return (
    <>
    <div className="pr-28">
      <h1 className="playful font-libre" aria-label="Letra">
        <span aria-hidden="true">L</span><span aria-hidden="true">e</span><span aria-hidden="true">t</span><span aria-hidden="true">r</span><span aria-hidden="true">a</span><span aria-hidden="true">!</span>
      </h1>
    </div>
    <div className="mx-10 md:mx-60">
      <img src={Envelope} className="w-80 pb-10 mx-auto"></img>
      <h1 className=" font-BuonaDisplay text-4xl text-gray-100 md:text-6xl">
        <span className="relative">
          <span className="h-20 pt-2 overflow-x-hidden whitespace-nowrap ">
            ... <span className="text-3xl md:text-5xl"></span>
          </span>
          <span className=" cursor absolute -bottom-0 left-0 -top-1 inline-block bg-berryblue w-full animate-type will-change"></span>
        </span>
      </h1>
      <p className="text-white font-libre text-3xl">
        Welcome to what we like to call a work in progress of the internet.{" "}
        <span className="italic text-blue-300 text-6xl">Letra</span> is a place
        where you can share your thoughts, ideas, and opinions with the world,
        or just your next door neighbor.{" "}
      </p>
      <div className="flex justify-between">
      <p className="font-libre text-xl text-transparent bg-right inline transition-all duration-500 ease-in-out bg-gradient-to-r from-blue-200 to-blue-200 bg-no-repeat bg-before hover:text-indigo-200 hover:bg-after h-5 mt-4">
        Make it a secret or even just a thought, it's up to you.{" "}
      </p>
      <a href="/create">
        <button
          type="button"
          className="mt-[-10px] rounded border-2 border-indigo-400 px-6 pt-2.5 pb-2 text-lg font-libre leading-normal text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:bg-indigo-600 focus:outline-none focus:ring-0 active:bg-indigo-700"
        >
          Send your note.
        </button>
        </a>
      </div>
    </div>
    </>
  );
}

export default HomeLoad;

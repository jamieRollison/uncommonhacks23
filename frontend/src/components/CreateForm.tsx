import { useEffect, useState, createRef, RefObject } from "react";
import LetterStack from "../assets/LetterStack.png";

function CreateForm() {
  const vars = ["letter", "confession", "secret message"];
  const colors = ["#D6D3F0", "#D8D78F", "#B0F2B4"];
  const [timer, setTimer] = useState(0);
  const mapVar = vars.map((value, i) => (
    <span className="font-libre text-7xl pl-1" style={{ color: colors[i % 3] }}>
      {value}
    </span>
  ));

  const [width, setWidth] = useState(0)
  const canvas_ref = createRef();

  useEffect(() => {
    if(canvas_ref.current){
      setWidth((canvas_ref.current as any).getBoundingClientRect().width)
    }
  }, [])


  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => (timer + 1) % 3);
      console.log(timer);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const setup = (p5: any) => {
    p5.createCanvas(width, 100).parent('canvas');
  };

  const draw = (p5: any) => {
    p5.background(0, 0, 0, 0);
  };

  return (
   <>
   
    <div className="flex flex-col">
        
      <div className="flex flex-col items-center">
      <img className="w-40"src={LetterStack} alt="stack of envelopes"></img>
        <h1 className="font-libre text-white text-7xl pr-2">
          Create your future
        </h1>{" "}
        {mapVar[timer]}
      </div>
      <div>
        <h2 className="text-indigo-200 font-libre text-xl text-center mt-2">
          Send a letter to your special someone, where they will have their very <br />
          own note hosted on the internet.
        </h2>
      </div>
      
    </div>
    <form>
    <div className="flex flex-col">
        <label className="text-white mt-4" htmlFor="to">To:</label>
        <input id="to" type="text" placeholder="My Dog, Lucy" className="appearance-none bg-transparent border-b border-indigo-200 w-full text-white font-sans mb-2 focus:outline-none pl-1" />
        <label className="text-white pt-2"htmlFor="from">From:</label>
        <input id="from" type="text" placeholder="Anonymous..." className="appearance-none bg-transparent border-b border-indigo-200 w-full text-white font-sans focus:outline-none mb-2 pl-1" />
        <label htmlFor="title" className="text-white mt-4">Title:</label>
        <input id="title" type="text" placeholder="Welcome to your tape" className="appearance-none bg-transparent border-b border-indigo-200 h-8 text-xl w-full text-white font-sans mb-2 focus:outline-none" />
        <label htmlFor="content" className="text-white mt-4">Content:</label>
        {/* <canvas id="content" placeholder="I love you so much, Lucy!" className="h-40 appearance-none bg-transparent border-none w-full text-white font-sans mb-2"></canvas> */}
        <div className='border-[1px] mb-10 mt-3 rounded border-white' id='canvas' ref={canvas_ref as any}/>
        <button className="rounded bg-indigo-700 px-6 py-3 text-lg font-serif leading normal text-white">
            Generate your Letter
        </button>
    </div>
  </form>
</>
  );
}

export default CreateForm;

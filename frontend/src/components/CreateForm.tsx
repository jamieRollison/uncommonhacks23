import { useEffect, useState } from "react";
import LetterStack from "../assets/LetterStack.png";

function CreateForm() {
  const vars = ["letter", "confession", "secret message"];
  const colors = ["#D6D3F0", "#D8D78F", "#B0F2B4"];
  const [timer, setTimer] = useState(0);

  const [font, setFont] = useState("selectFont")

  const [libreVisible, setLibreVisible] = useState(false)
  const [handrawnVisible, setHandrawnVisible] = useState(false)
  const [alkatraVisible, setAlkatraVisible] = useState(false)
  const [redactedVisible, setRedactedVisible] = useState(false)
  const [robotoVisible, setRobotoVisible] = useState(false)

  useEffect(() => {
    font === "Libre Baskerville" ? setLibreVisible(true) : setLibreVisible(false)
    font === "Golos Text" ? setHandrawnVisible(true) : setHandrawnVisible(false)
    font === "Alkatra" ? setAlkatraVisible(true) : setAlkatraVisible(false)
    font === "Redacted" ? setRedactedVisible(true) : setRedactedVisible(false)
    font === "Roboto" ? setRobotoVisible(true) : setRobotoVisible(false)
    }, [font])

  const handleOnChange= (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFont(e.currentTarget.value);
  };

  const renderResult = () => {
    let result;
    font === "selectFont" ? result = "Please select a font" : (result = font);
    return result;
  }

  const mapVar = vars.map((value, i) => (
    <span className="font-libre text-7xl pl-1" style={{ color: colors[i % 3] }}>
      {value}
    </span>
  ));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => (timer + 1) % 3);
      console.log(timer);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
      <div className="mt-4 flex flex-col items-center">
        <h1 className="mt-2 mb-2 font-libre text-2xl text-indigo-300">Choose a cool, awesome font.</h1>
        <select className="form-select w-80 font-serif rounded h-10 px-2" value={font} onChange={handleOnChange}>
            <option value="selectFont">Select a font</option>
            <option value="Libre Baskerville">Libre Baskerville</option>
            <option value="Handrawn">Handrawn</option>
            <option value="Alkatra">Alkatra</option>
            <option value="Redacted">Redacted</option>
            <option value="Roboto">Roboto</option>
            
        </select> 
        <h1 className="mt-2 text-white text-xl" style={{
            fontFamily: libreVisible ? "Libre Baskerville" : handrawnVisible ? "Handrawn" : alkatraVisible ? "Alkatra" : redactedVisible ? "Redacted" : robotoVisible ? "Roboto" : "selectFont"
        }}>{renderResult()}</h1> 


      </div>
      
    </div>
    <form>
    <div className="flex flex-col">
        <label className="text-white mt-4" htmlFor="to">To:</label>
        <input id="to" type="text" placeholder="My Dog, Lucy" className="appearance-none bg-transparent border-b border-indigo-200 w-full text-white font-sans mb-2 focus:outline-none pl-1" />
        <label className="text-white pt-2"htmlFor="from">From:</label>
        <input id="from" type="text" placeholder="Anonymous..." className="appearance-none bg-transparent border-b border-indigo-200 w-full text-white font-sans focus:outline-none mb-2 pl-1" />
        
        
        <label htmlFor="title" className="text-white mt-4" >Title:</label>
        <input id="title" type="text" placeholder="Welcome to your tape" className="appearance-none bg-transparent border-b border-indigo-200 h-10 text-4xl w-full text-white font-sans mb-2 focus:outline-none" style={{
            fontFamily: libreVisible ? "Libre Baskerville" : handrawnVisible ? "Golos Text" : alkatraVisible ? "Alkatra" : redactedVisible ? "Redacted" : robotoVisible ? "Roboto" : "selectFont"
        }} />
        <label htmlFor="content" className="text-white mt-4">Content:</label>
        <textarea id="content" placeholder="I love you so much, Lucy!" className="h-40 appearance-none bg-transparent border-none w-full text-white font-sans mb-2"></textarea>
        <button className="rounded bg-indigo-700 px-6 py-3 text-lg font-serif leading normal text-white">
            Generate your Letter
        </button>

    </div>
  </form>
</>
  );
}

export default CreateForm;

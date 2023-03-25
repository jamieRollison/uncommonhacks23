function AnimatedEnvelope() {
  return (
    <div className= "h-52 w-72 bg-blue-200 relative flex justify-center item-center z-0">
    <div className="absolute h-full w-full top-0 left-0 border-r-150 border-solid border-l-150 border-t-transparent border-r-indigo-200 border-l-indigo-400 border-b-indigo-200 origin-top border-t-100 border-t-indigo-300 rotate-x-0 z-3"> </div>
    <div className="absolute h-full w-full top-0 left-0 border-r-150 border-solid border-l-150 border-t-transparent border-r-indigo-200 border-l-indigo-400 border-b-indigo-200 origin-top border-t-100 border-t-indigo-400 rotate-x-90 z-1"> </div>
    <div className="h-full w-full top-0 left-0 border-t-100 border-r-150 border-b-100 border-l-150 border-black z-3"> </div>
    <div className= "absolute t-0 w-4/5 h-4/5 bg-white rounded-sm z-2"> 
    </div>

      {/* <div className="m-0 p-0 sm:box-border"></div>
      <div className="wrapper h-200px w-300px bg-gray-500 relative flex justify-center items-center z-0">
        <div className="absolute top-0 w-4/5 h-4/5 bg-white rounded-15 z-2"></div>
      </div> */}
    </div>

    /*
    .letter {
        position: absolute;
        top: 0;
        width: 80%;
        height: 80%;
        background-color: white;
        border-radius: 15px;
        z-index: 2;
    }
    .envelope {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        border-top: 100px solid black;
        border-right:150px solid black;
        border-bottom: 100px solid black;
        border-left: 150px solid black;
        z-index: 3;
    }*/
  );
}

export default AnimatedEnvelope;

import Sketch from "react-p5";

interface CanvasProps {
  setup: (p5: any) => void;
  draw: (p5: any) => void;
}

export default function Canvas({setup, draw}: CanvasProps) {

  return (
    <div>
      <Sketch setup={setup} draw={draw}/>
    </div>
  );
}

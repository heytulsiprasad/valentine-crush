import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import heroImg from "../assets/hero.gif";

const DEFAULT_TEXTS = [
  "No",
  "Are you sure?",
  "Think about it!",
  "I'm waiting!",
  "Last chance",
];

function Hero() {
  const navigate = useNavigate();

  const [scaleNo, setScaleNo] = useState(1);
  const [scaleYes, setScaleYes] = useState(1);
  const [text, setText] = useState(DEFAULT_TEXTS[0]);
  const [ctr, setCtr] = useState(0);

  const handleNo = () => {
    setText(DEFAULT_TEXTS[ctr + 1]);
    setCtr((prev) => prev + 1);
    setScaleNo((prev) => prev - 0.2);
    setScaleYes((prev) => prev + 0.1);
  };

  return (
    <main className="bg-white grow flex flex-col items-center justify-center">
      <div className="h-full w-full flex flex-col gap-y-8 items-center justify-center">
        <div>
          <img src={heroImg} alt="milk and mocha" className="rounded-2xl" />
        </div>
        <div className="flex flex-col gap-y-12 items-center mt-8">
          <h1 className="text-5xl mdmax:text-4xl smmax:text-3xl italic text-center text-black">
            Will you be my valentine?
          </h1>
          <div className="flex gap-8 mdmax:flex-col">
            <Button
              onClick={() => navigate("/success")}
              style={{ transform: `scale(${scaleYes})` }}
            >
              Yes
            </Button>
            <Button
              onClick={handleNo}
              style={{ transform: `scale(${scaleNo})` }}
            >
              {text}
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;

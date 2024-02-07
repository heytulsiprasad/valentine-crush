import clsx from 'clsx'
import './App.css'
import { useState } from 'react';

const DEFAULT_TEXTS = [
  'No',
  'Are you sure?',
  'Think about it!',
  "I'm waiting!",
  'Last chance',
];


function App() {
    
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
       <main className={clsx('h-screen w-screen bg-white')}>
      <div className="h-full w-full flex flex-col gap-y-8 items-center justify-center">
        <div>
          <img
            src="/ask.gif"
            alt="milk and mocha"
            className="rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-y-12 items-center mt-8">
          <h1 className="text-5xl mdmax:text-4xl smmax:text-3xl italic text-center text-black">
            Will you be my valentine?
          </h1>
          <div className="flex gap-8 mdmax:flex-col">
            <Button
              onClick={() => history.push('/success')}
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
  )
}

export default App

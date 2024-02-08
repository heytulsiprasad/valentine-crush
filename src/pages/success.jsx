import successImg from "../assets/success.gif";
import clsx from "clsx";

const Success = () => {
  return (
    <main className="bg-white">
      <div className="h-full w-full flex flex-col gap-y-8 items-center justify-center">
        <h1 className="text-5xl mdmax:text-4xl smmax:text-3xl italic text-center text-black">
          It&apos;s a date!
        </h1>
        <div>
          <img src={successImg} alt="love you" className="rounded-2xl" />
        </div>
      </div>
    </main>
  );
};

export default Success;

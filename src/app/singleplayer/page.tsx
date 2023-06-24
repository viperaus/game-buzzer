"use client";
import { playSound } from "../helpers/audioPlayer";

const SinglePlayerPage = () => {
  return (
    <div className="w-full h-screen text-center flex content-around items-center justify-center overflow-hidden">
      <button
        className="mx-4 border rounded-lg h-3/4 bg-blue-700 text-white flex-grow "
        onClick={() => {
          playSound(1);
        }}
      >
        <div className="text-5xl">Player 1</div>
      </button>
    </div>
  );
};

export default SinglePlayerPage;

"use client";
import { playSound } from "../helpers/audioPlayer";

import { useState } from "react";

const MultiPlayerPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full h-screen text-center flex content-around items-center justify-center overflow-hidden ">
      <button
        className="mx-4 border rounded-lg h-3/4 bg-blue-700 text-white flex-grow "
        onClick={() => {
          playSound(1, isPlaying, setIsPlaying);
        }}
      >
        <div className="rotate-90 text-5xl">Player 1</div>
      </button>
      <button
        className="mx-4 border rounded-lg h-3/4  bg-orange-600 text-white  flex-grow "
        onClick={() => {
          playSound(2, isPlaying, setIsPlaying);
        }}
      >
        <div className="-rotate-90 text-5xl">Player 2</div>
      </button>
    </div>
  );
};

export default MultiPlayerPage;

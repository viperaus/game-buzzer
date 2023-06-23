"use client";
import { playSound } from "../helpers/audioPlayer";

import { useState } from "react";

const MultiPlayerPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full h-screen text-center">
      <button
        className="w-3/4 border rounded-lg h-1/2 bg-red-700"
        onClick={() => {
          playSound(1, isPlaying, setIsPlaying);
        }}
      >
        &nbsp;
      </button>
      <button
        className="w-3/4 border rounded-lg h-1/2 bg-green-700"
        onClick={() => {
          playSound(2, isPlaying, setIsPlaying);
        }}
      >
        &nbsp;
      </button>
    </div>
  );
};

export default MultiPlayerPage;

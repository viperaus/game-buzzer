"use client";
import { playSound } from "../helpers/audioPlayer";

const SinglePlayerPage = () => {
  return (
    <div className="w-full h-screen text-center">
      <button
        className="w-3/4 border rounded-lg h-screen bg-red-700"
        onClick={() => {
          playSound(1);
        }}
      >
        &nbsp;
      </button>
    </div>
  );
};

export default SinglePlayerPage;

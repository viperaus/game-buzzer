"use client";
import { NextPage } from "next";

const sounds = [
  { id: 1, file: "/audio/blurrrurp.mp3", name: "Blurp" },
  { id: 2, file: "/audio/dududah.mp3", name: "DuDah" },
  { id: 3, file: "/audio/correct.mp3", name: "Correct" },
  { id: 4, file: "/audio/wrong.mp3", name: "Wrong" },
];

interface Props {
  playerNumber: number;
  handleSoundChange: Function;
}

const SoundSelection: NextPage<Props> = ({
  playerNumber,
  handleSoundChange,
}) => {
  return (
    <select
      onChange={(e) => {
        handleSoundChange(playerNumber, e);
      }}
      className=" dark:bg-black dark:text-white dark:border dark:border-gray-200 dark:rounded-md px-2 py-2"
    >
      {sounds.map((sound) => {
        return (
          <option key={sound.id} value={sound.file}>
            {sound.name}
          </option>
        );
      })}
    </select>
  );
};
export default SoundSelection;

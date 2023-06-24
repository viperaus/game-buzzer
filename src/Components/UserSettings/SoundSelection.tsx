"use client";
import { loadSettings } from "@/app/settings/helpers/settingsStorage";
import { NextPage } from "next";

import { sounds } from "@/app/helpers/sounds";

interface Props {
  playerNumber: number;
  handleSoundChange: Function;
}

const SoundSelection: NextPage<Props> = ({
  playerNumber,
  handleSoundChange,
}) => {
  const settings = loadSettings();

  return (
    <select
      onChange={(e) => {
        handleSoundChange(playerNumber, e);
      }}
      className=" dark:bg-black dark:text-white dark:border dark:border-gray-200 dark:rounded-md px-2 py-2"
    >
      {sounds.map((sound) => {
        if (
          (playerNumber === 1 && settings.player1Sound === sound.file) ||
          (playerNumber === 2 && settings.player2Sound === sound.file)
        ) {
          return (
            <option key={sound.id} value={sound.file} selected>
              {sound.name}
            </option>
          );
        }
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

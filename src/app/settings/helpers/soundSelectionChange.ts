import { ChangeEvent } from "react";
import { loadSettings, storeSettings } from "./settingsStorage";

export const handleSoundChange = (
  playerNumber: number,
  e: ChangeEvent<HTMLSelectElement>
) => {
  const settings = loadSettings();
  switch (playerNumber) {
    case 1:
      settings.player1Sound = e.target.value;
      break;
    case 2:
      settings.player2Sound = e.target.value;
      break;
  }
  console.log(settings);
  storeSettings(settings);
};

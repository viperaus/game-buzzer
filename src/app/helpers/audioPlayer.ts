import UIFx from "uifx";
import { loadSettings } from "../settings/helpers/settingsStorage";
import { sounds } from "./sounds";

export const playSound = (
  playerNumber: number,
  isPlaying?: boolean,
  setIsPlaying: Function = () => {}
) => {
  if (isPlaying) {
    console.log("Already playing sound - returning");
    return;
  }

  setIsPlaying(true);

  const settings = loadSettings();
  let soundToPlay = "";
  switch (playerNumber) {
    case 1:
      soundToPlay = settings.player1Sound;
      break;
    case 2:
      soundToPlay = settings.player2Sound;
      break;
  }
  const bell = new UIFx(soundToPlay, {
    volume: 0.6, // number between 0.0 ~ 1.0
    throttleMs: 1500,
  });
  bell.play();

  const s = sounds.find((sound) => sound.file === soundToPlay)!;

  setTimeout(() => {
    setIsPlaying(false);
  }, s.length);
};

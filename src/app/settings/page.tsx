"use client";
import SoundSelection from "@/Components/UserSettings/SoundSelection";
import { handleSoundChange } from "./helpers/soundSelectionChange";
import Link from "next/link";
import { loadSettings } from "./helpers/settingsStorage";

const SettingsPage = () => {
  let settings = loadSettings();

  return (
    <div className="w-full pt-6 text-center px-0 h-screen">
      <header className=" text-3xl m-4">Settings</header>
      <main>
        <div className="my-2">
          <label className="mr-4">Player 1 sound:</label>
          <SoundSelection
            playerNumber={1}
            handleSoundChange={handleSoundChange}
            selectedValue={settings.player1Sound}
          />
        </div>
        <div className="my-2">
          <label className="mr-4">Player 2 sound:</label>
          <SoundSelection
            playerNumber={2}
            handleSoundChange={handleSoundChange}
            selectedValue={settings.player2Sound}
          />
        </div>
      </main>
      <footer className="w-full text-center fixed bottom-10">
        <Link href={"/"}>Close</Link>
      </footer>
    </div>
  );
};

export default SettingsPage;

import { sounds } from "@/app/helpers/sounds";
interface Settings {
  player1Sound: string;
  player2Sound: string;
}

const defaultSettings = {
  player1Sound: sounds[0].file,
  player2Sound: sounds[1].file,
} satisfies Settings;

export function loadSettings(): Settings {
  if (typeof window === "undefined") return defaultSettings;
  if (!localStorage.getItem("buzzer_settings"))
    localStorage.setItem("buzzer_settings", JSON.stringify(defaultSettings));

  const settings: Settings = JSON.parse(
    localStorage.getItem("buzzer_settings")!
  );

  return settings;
}

export function storeSettings(settings: Settings) {
  localStorage.setItem("buzzer_settings", JSON.stringify(settings));
}

interface Settings {
  player1Sound: string;
  player2Sound: string;
}

const defaultSettings = {
  player1Sound: "/audio/blurrrurp.mp3",
  player2Sound: "/audio/dududah.mp3",
} satisfies Settings;

export const loadSettings = (): Settings => {
  if (!localStorage.getItem("buzzer_settings"))
    localStorage.setItem("buzzer_settings", JSON.stringify(defaultSettings));

  const settings: Settings = JSON.parse(
    localStorage.getItem("buzzer_settings")!
  );

  return settings;
};

export const storeSettings = (settings: Settings) => {
  localStorage.setItem("buzzer_settings", JSON.stringify(settings));
};

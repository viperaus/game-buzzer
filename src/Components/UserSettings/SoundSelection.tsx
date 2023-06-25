import { sounds } from "@/app/helpers/sounds";
import { ComponentType, useState } from "react";

interface Props {
  playerNumber: number;
  handleSoundChange: Function;
  selectedValue: string;
}

const SoundSelection: ComponentType<Props> = ({
  playerNumber,
  handleSoundChange,
  selectedValue,
}) => {
  const [value, setValue] = useState(selectedValue);

  console.log(`player ${playerNumber} selected value: ${selectedValue}`);
  return (
    <select
      onChange={(e) => {
        handleSoundChange(playerNumber, e);
        setValue(e.target.value);
      }}
      value={value}
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

"use client";
import { NextPage } from "next";
//import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

interface Props {
  numberOfPlayers: number;
  children: string;
}

const PlayerSelectionButton: NextPage<Props> = ({
  numberOfPlayers,
  children,
}) => {
  const { push } = useRouter();

  const handlePlayerClick = (players: number) => {
    console.log(`Starting a game for ${players} players`);
    switch (players) {
      case 1:
        push("/singleplayer");
        break;
      case 2:
        push("/multiplayer");
        break;
    }
  };

  return (
    <>
      <button
        value={numberOfPlayers}
        onClick={() => handlePlayerClick(numberOfPlayers)}
        className=" border rounded bg-slate-400 text-slate-900 p-4 m-2 hover:bg-slate-600 hover:text-slate-950"
      >
        {children}
      </button>
    </>
  );
};

export default PlayerSelectionButton;

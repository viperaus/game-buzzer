import PlayerSelectionButton from "@/Components/MainPage/PlayersSelection";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="h-screen w-full p-0 m-0">
      <header className=" text-center text-4xl h-1/4  p-12 m-0 ">
        Game Buzzer!
      </header>
      <main className="p-0 m-0 pt-5 w-full h-1/2 text-center flex flex-col  content-around items-center justify-center overflow-hidden ">
        <PlayerSelectionButton numberOfPlayers={1}>
          1 Player
        </PlayerSelectionButton>
        <PlayerSelectionButton numberOfPlayers={2}>
          2 Player
        </PlayerSelectionButton>
      </main>
      <footer className="w-full text-center fixed bottom-10">
        <Link href="/settings">Settings</Link>
      </footer>
    </div>
  );
};

export default HomePage;

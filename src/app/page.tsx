import PlayerSelectionButton from "@/Components/MainPage/PlayersSelection";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="h-screen w-full pt-6 pb-0 px-0 ">
      <header className=" text-center text-4xl">Game Buzzer!</header>
      <main className="text-center mt-5">
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

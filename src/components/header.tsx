import { ModeToggle } from "./dark-mode-toggle";

export function Header() {
  return (
    <header className=" container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 fixed bg-card left-0 right-0">
      <h1 className="text-2xl font-bold tracking-tight dm:text-white">Chat PDF</h1>
      <ModeToggle></ModeToggle>
    </header>
  );
}

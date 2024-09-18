import NavBar from "../components/NavBar";
import { exo_2, orbitron } from "./fonts";
import "./globals.css";

export const metadata = {
  title: {
    default: "Indie Gamer",
    template: "%s | Indie Gamer",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${exo_2.variable} ${orbitron.variable}`}>
      <body className="bg-orange-50 flex flex-col min-h-screen px-4 py-2">
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="text-center text-xs border-t py-3">
          Game data and images cortesy of{" "}
          <a className="text-orange-800 hover:underline" href="https://rawg.io/" target="_blank">
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}

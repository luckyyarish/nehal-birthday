import { useState } from "react";
import Typewriter from "./Typewriter";
import FlowerBloom from "./FlowerBloom";
import { NAME } from "./config";

export default function App() {
  const [hasSong, setHasSong] = useState(true);

  return (
    <main className="min-h-dvh bg-white font-sans text-slate-700 flex flex-col items-center px-4 sm:px-6 py-5 sm:py-8">
      {hasSong && (
        <div className="flex flex-col items-center gap-1 mb-5 w-full">
          <audio
            controls
            loop
            src="/song.mp3"
            onError={() => setHasSong(false)}
            className="w-full max-w-xs sm:max-w-sm"
          />
          <p className="text-[11px] text-slate-400 text-center max-w-xs">
            Browsers block autoplay, so please press play.
          </p>
        </div>
      )}

      <section className="w-full max-w-5xl grid gap-6 sm:gap-8 lg:grid-cols-2 items-center flex-1">
        <div className="order-2 lg:order-1 lg:justify-self-end w-full max-w-md mx-auto lg:mx-0">
          <Typewriter />
        </div>
        <div className="order-1 lg:order-2 w-full">
          <FlowerBloom>
          </FlowerBloom>
        </div>
      </section>

      <footer className="w-full max-w-5xl border-t border-slate-200 mt-6 sm:mt-8 pt-4 text-center text-xs sm:text-sm text-slate-500">
        Made with 🕊️
      </footer>
    </main>
  );
}
import './CSS/GifGrid.css';

import GifCard from "./GifCard";
import type { GiphyGif } from "../types/giphy";

interface GifGridProps {
  gifs: GiphyGif[];
  onGifClick: (gif: GiphyGif) => void;
}

export default function GifGrid({ gifs, onGifClick }: GifGridProps) {
  return (
    <div className="gif-grid">
      {gifs.map((gif) => (
        <GifCard key={gif.id} gif={gif} onClick={onGifClick} />
      ))}
    </div>
  );
}

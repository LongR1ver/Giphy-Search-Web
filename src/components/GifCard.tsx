import type { GiphyGif } from "../types/giphy";

interface GifCardProps {
  gif: GiphyGif;
  onClick: (gif: GiphyGif) => void;
}

export default function GifCard({ gif, onClick }: GifCardProps) {
  return (
    <div
      className="gif-card"
      onClick={() => onClick(gif)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick(gif)}
    >
      <img
        src={gif.images.fixed_width.url}
        alt={gif.title || "GIF"}
        loading="lazy"
      />
    </div>
  );
}

import './CSS/GifModal.css'

import type { GiphyGif } from "../types/giphy";

interface GifModalProps {
  gif: GiphyGif;
  onClose: () => void;
  showToast: (msg: string) => void;
}

export default function GifModal({ gif, onClose, showToast }: GifModalProps) {
  const copyGiphyPageUrl = async () => {
    try {
      await navigator.clipboard.writeText(gif.images.original.url);
      showToast("Copied the URL!");
    } catch (err) {
      console.error("Failed to copy to clipboard:", err);
      showToast("Failed to copy the URL.");
    }
  };

  return (
    <div className="gif-modal-overlay">
      <div className="gif-modal-content">
        <button
          className="gif-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>
        <img
          src={gif.images.original.url}
          alt={gif.title || "GIF"}
          className="gif-modal-image"
        />
        <div className="gif-modal-actions">
          <button onClick={copyGiphyPageUrl}>Copy URL</button>
          <a href={gif.url} target="_blank" rel="noreferrer">
            View on Giphy
          </a>
        </div>
      </div>
    </div>
  );
}

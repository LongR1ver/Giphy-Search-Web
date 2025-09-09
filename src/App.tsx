import './App.css';

import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import GifGrid from "./components/GifGrid";
import GifModal from "./components/GifModal";
import { searchGifs } from "./services/giphyApi";
import type { GiphyGif } from "./types/giphy";
import Toast from './components/Toast';

export default function App() {
  const [gifs, setGifs] = useState<GiphyGif[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [offset, setOffset] = useState(0);
  const [selectedGif, setSelectedGif] = useState<GiphyGif | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const handleSearch = async (term: string) => {
    const q = term.trim();
    if (!q) return;
    setQuery(q);
    setOffset(0);
    setGifs([]);
    fetchGifs(q, 0);
  };

  const fetchGifs = async (term: string, newOffset: number) => {
    setError(null);
    setLoading(true);

    try {
      const results = await searchGifs(term, newOffset);
      setGifs((prev) => [...prev, ...results]);
      setOffset(newOffset);
    } catch (e) {
      setError("Failed to fetch GIFs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const showToast = (message: string) => setToast(message);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop + 200 >=
        document.documentElement.offsetHeight
      ) {
        if (!loading && query) {
          fetchGifs(query, offset + 25);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [query, offset, loading]);

  return (
    <div className="app container">
      <h1 className="title">Giphy Search</h1>
      <SearchBar onSearch={handleSearch} />

      {gifs.length === 0 && !loading && !error && (
        <p className="empty">Try a search to see some GIFs</p>
      )}

      <GifGrid gifs={gifs} onGifClick={setSelectedGif} />
      
      {loading && <Loader />}

      {error && <p className="error">{error}</p>}

      {selectedGif && (
        <GifModal
          gif={selectedGif}
          onClose={() => setSelectedGif(null)}
          showToast={showToast}
        />
      )}

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}

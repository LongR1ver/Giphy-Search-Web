import axios from "axios";
import type { GiphyGif } from "../types/giphy";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const BASE_URL = "https://api.giphy.com/v1/gifs";

export const searchGifs = async (
  query: string,
  offset = 0,
  limit = 25
): Promise<GiphyGif[]> => {
  try {
    const response = await axios.get<{ data: GiphyGif[] }>(`${BASE_URL}/search`, {
      params: {
        "api_key": API_KEY,
        q: query,
        limit,
        offset,
        rating: "g",
      },
    });
    
    return response.data.data;
  } catch (error) {
    console.error("Failed to fetch GIFs:", error);
    return [];
  }
};

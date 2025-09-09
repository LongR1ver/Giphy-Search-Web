export interface GiphyImage {
  url: string;
  width: string;
  height: string;
  mp4?: string;
  webp?: string;
}

export interface GiphyGif {
  id: string;
  title: string;
  url: string;
  images: {
    fixed_width: GiphyImage;
    fixed_height: GiphyImage;
    original: GiphyImage;
    preview_gif?: GiphyImage;
  };
}

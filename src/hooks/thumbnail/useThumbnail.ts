import { useLocalStorage } from "usehooks-ts";

export const useThumbnail = () => {
  const [thumbnail, setThumbnail] = useLocalStorage<number>("thumbnail", 1);

  return {
    setThumbnail,
    thumbnail,
  };
};

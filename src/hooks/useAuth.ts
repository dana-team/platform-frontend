import { useRouter } from "@tanstack/react-router";
import { useLocalStorage } from "usehooks-ts";

// TODO: indexdb
export const useAuth = () => {
  const router = useRouter();
  const [thumbnail, setThumbnail] = useLocalStorage<number>("thumbnail", 1);
  const [username, setUsername] = useLocalStorage<string>("username", "");
  const [token, setToken] = useLocalStorage<string>("token", "");

  const signIn = (token: string, user: string) => {
    setToken(token);
    setUsername(user);
    localStorage.setItem("isAuthenticated", "true");
  };

  const signOut = () => {
    setToken("");
    localStorage.removeItem("isAuthenticated");
    router.invalidate();
  };

  const isAuthenticated = () =>
    localStorage.getItem("isAuthenticated") === "true";

  return {
    signIn,
    signOut,
    isAuthenticated,
    setThumbnail,
    thumbnail,
    username,
    token,
  };
};

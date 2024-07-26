import MainNothing from "./MainNothing";
import FavoriteNothing from "./FavoriteNothing";

export default function Nothing({ location }) {
  let NothingContent = null
  if (location === '/alphacast/main') {
    NothingContent = MainNothing
  } else {
    NothingContent = FavoriteNothing
  }
  
  return (
    <NothingContent />
  );
}
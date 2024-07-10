import LeftNav from "../component/LeftNav";
import Header from "../component/Header";
import FavoriteContent from "../component/FavoriteContent";
import favoriteStyle from "./FavoritePage.module.scss";

function FavoritePageContainer({ children }) {
  return <section className={favoriteStyle.favoritePageContainer}>{children}</section>;
}

export default function FavoritePage() {
  return (
    <FavoritePageContainer>
      <LeftNav />
      <Header />
      <FavoriteContent />
    </FavoritePageContainer>
  );
}

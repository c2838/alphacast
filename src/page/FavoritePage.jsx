import LeftNav from "../component/LeftNav";
import Header from "../component/Header";
import FavoriteContent from "../component/FavoriteContent";
import AddChannelModal from "../component/AddChannelModal";
import AddCategoryModal from "../component/AddCategoryModal";
import favoriteStyle from "./FavoritePage.module.scss";
import { useContext } from "react";
import { NavCastCategoryListContext, PodCastCardsContext } from "../context/constContext";

function FavoritePageContainer({ children }) {
  return <section className={favoriteStyle.favoritePageContainer}>{children}</section>;
}

export default function FavoritePage() {
  const { isAddCategory } = useContext(NavCastCategoryListContext)
  const { isAddChannel } = useContext(PodCastCardsContext)
  return (
    <>
      <section
        className={
          isAddChannel || isAddCategory
            ? favoriteStyle.favoritePageContainerBlur
            : favoriteStyle.favoritePageContainer
        }
      >
        <FavoritePageContainer>
          <LeftNav />
          <Header />
          <FavoriteContent />
        </FavoritePageContainer>
      </section>
      {(isAddChannel || isAddCategory) && (
        <div className={favoriteStyle.blurColor} />
      )}
      {isAddChannel && <AddChannelModal />}
      {isAddCategory && <AddCategoryModal />}
    </>
  );
}

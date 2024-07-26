import NowPlaying from "../NowPlaying";
import Nothing from "../Nothing";
import { PodcastList } from "../PodcastList";
import favContentStyle from './FavoriteContent.module.scss'
import { useLocation } from "react-router-dom";

function FavoriteContentContainer({ children }) {
  return (
    <section className={favContentStyle.favoriteContentContainer}>
      {children}
    </section>
  );
}

export default function FavoriteContent() {
  const location = useLocation().pathname
  return (
    <FavoriteContentContainer>
      <Nothing location={location} />
      {/* <PodcastList /> */}
      <NowPlaying />
    </FavoriteContentContainer>
  )
}
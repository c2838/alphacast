import NowPlaying from "../NowPlaying";
import PodcastList from "../PodcastList";
import favContentStyle from './FavoriteContent.module.scss'

function FavoriteContentContainer({ children }) {
  return (
    <section className={favContentStyle.favoriteContentContainer}>
      {children}
    </section>
  );
}

export default function FavoriteContent() {
  return (
    <FavoriteContentContainer>
      <PodcastList />
      <NowPlaying />
    </FavoriteContentContainer>
  )
}
import MainNothing from "../MainNothing"
import PodcastCards from "../PodcastCards/PodcastCards"
import NowPlaying from "../NowPlaying"
import contentStyle from './MainContent.module.scss'

function MainContentContainer({ children }) {
  return (
    <section className={contentStyle.mainContentContainer}>
      {children}
    </section>
  )
}

export default function MainContent() {
  return (
    <MainContentContainer>
      {/* <MainNothing /> */}
      <PodcastCards />
      <NowPlaying />
    </MainContentContainer>
  )
}
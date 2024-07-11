import MainNothing from "../MainNothing"
import PodcastCards from "../PodcastCards"
import NowPlaying from "../NowPlaying"
import contentStyle from './MainContent.module.scss'
import { useContext } from "react"
import { PodCastCardsContext } from "../../context/constContext"


export default function MainContent() {
  const { isLearnMore } = useContext(PodCastCardsContext)
  return (
    <section className={contentStyle.mainContentContainer}>
      {/* <MainNothing /> */}
      <PodcastCards />
      <NowPlaying />
    </section>
  );
}
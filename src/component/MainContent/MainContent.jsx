import Nothing from "../Nothing"
import PodcastCards from "../PodcastCards"
import NowPlaying from "../NowPlaying"
import contentStyle from './MainContent.module.scss'
import { useLocation } from "react-router-dom"


export default function MainContent() {
  const location = useLocation().pathname;
  return (
    <section className={contentStyle.mainContentContainer}>
      <Nothing location={location}/>
      {/* <PodcastCards /> */}
      <NowPlaying />
    </section>
  );
}
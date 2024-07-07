import MainNothing from "../MainNothing"
import MainNowPlaying from "../MainNowPlaying"
import contentStyle from './MainContent.module.scss'

function MainContentContainer({ children }) {
  return (
    <section className={contentStyle.MainContentContainer}>
      {children}
    </section>
  )
}

export default function MainContent() {
  return (
    <MainContentContainer>
      <MainNothing />
      <MainNowPlaying />
    </MainContentContainer>
  )
}
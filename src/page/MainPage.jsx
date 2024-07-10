import LeftNav from '../component/LeftNav'
import Header from '../component/Header'
import MainContent from '../component/MainContent'
import mainStyle from './MainPage.module.scss'

function MainPageContainer({ children }) {
  return(
    <section className={mainStyle.mainPageContainer}>
      {children}
    </section>
  )
}

export default function MainPage() {
  
  return (
      <MainPageContainer>
        <LeftNav />
        <Header />
        <MainContent />
      </MainPageContainer>
  );
}
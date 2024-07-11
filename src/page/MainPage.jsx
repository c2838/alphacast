import LeftNav from '../component/LeftNav'
import Header from '../component/Header'
import MainContent from '../component/MainContent'
import LearnMoreModal from "../component/LearnMoreModal";
import mainStyle from './MainPage.module.scss'
import { useContext } from 'react';
import { PodCastCardsContext } from '../context/constContext';


export default function MainPage() {
  const { isLearnMore } = useContext(PodCastCardsContext)
  return (
    <>
      <section
        className={
          isLearnMore
            ? mainStyle.mainPageContainerBlur
            : mainStyle.mainPageContainer
        }
      >
        <LeftNav />
        <Header />
        <MainContent />
      </section>
      {isLearnMore && <div className={mainStyle.blurColor} />} 
      {isLearnMore && <LearnMoreModal />}
    </>
  );
}
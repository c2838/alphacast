import LeftNav from '../component/LeftNav'
import Header from '../component/Header'
import MainContent from '../component/MainContent'
import LearnMoreModal from "../component/LearnMoreModal";
import AddChannelModal from '../component/AddChannelModal'
import AddCategoryModal from '../component/AddCategoryModal';
import mainStyle from './MainPage.module.scss'
import { useContext } from 'react';
import { NavCastCategoryListContext, PodCastCardsContext } from '../context/constContext';


export default function MainPage() {
  const { isLearnMore, isAddChannel } = useContext(PodCastCardsContext)
  const { isAddCategory } = useContext(NavCastCategoryListContext)
  return (
    <>
      <section
        className={
          (isLearnMore || isAddChannel || isAddCategory)
            ? mainStyle.mainPageContainerBlur
            : mainStyle.mainPageContainer
        }
      >
        <LeftNav />
        <Header />
        <MainContent />
      </section>
      {(isLearnMore || isAddChannel || isAddCategory) && <div className={mainStyle.blurColor} />} 
      {isLearnMore && <LearnMoreModal />}
      {isAddChannel && <AddChannelModal />}
      {isAddCategory && <AddCategoryModal />}
    </>
  );
}
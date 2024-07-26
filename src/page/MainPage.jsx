import LeftNav from '../component/LeftNav'
import Header from '../component/Header'
import MainContent from '../component/MainContent'
import LearnMoreModal from "../component/LearnMoreModal";
import AddChannelModal from '../component/AddChannelModal'
import mainStyle from './MainPage.module.scss'
import { useContext, useState } from 'react';
import { PodCastCardsContext } from '../context/constContext';


export default function MainPage() {
  const { isLearnMore, isAddChannel } = useContext(PodCastCardsContext)
  return (
    <>
      <section
        className={
          (isLearnMore || isAddChannel)
            ? mainStyle.mainPageContainerBlur
            : mainStyle.mainPageContainer
        }
      >
        <LeftNav />
        <Header />
        <MainContent />
      </section>
      {(isLearnMore || isAddChannel) && <div className={mainStyle.blurColor} />} 
      {isLearnMore && <LearnMoreModal />}
      {isAddChannel && <AddChannelModal />}
    </>
  );
}
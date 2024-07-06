import LeftNav from '../component/LeftNav'
import Header from '../component/Header'
import mainStyle from './MainPage.module.scss'
import { NavCastListContext } from '../context/constContext'
import { useContext, useState } from 'react'

function MainPageContainer({ children }) {
  return(
    <section className={mainStyle.mainPageContainer}>
      {children}
    </section>
  )
}

export default function MainPage() {
  const CastList = useContext(NavCastListContext);
  const [castList, setCastList] = useState(CastList);
  return (
    <NavCastListContext.Provider value={castList}>
      <MainPageContainer>
        <LeftNav />
        <Header />
      </MainPageContainer>
    </NavCastListContext.Provider>
  );
}
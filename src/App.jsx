import { MainPage, FavoritePage, LoginPage, HomePage } from './page'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavCastCategoryListContext, PodCastCardsContext, PodCastListContext } from "./context/constContext";
import { useContext, useState } from "react";
import './App.css'

function App() {
  // 標頭分類資料渲染
  const CastCategoryList = useContext(NavCastCategoryListContext);
  // 列表資料
  const PodcastList = useContext(PodCastListContext)
  // 卡片資料
  const PodcasrCards = useContext(PodCastCardsContext)
  const [castCategoryList, setCastCategoryList] = useState(CastCategoryList);
  const [podcastList, setPodcastList] = useState(PodcastList)
  const [podcastCards, setpodcastCards] = useState(PodcasrCards)
  // learnModal觸發
  const [isLearnMore, setIsLearnMore] = useState(false);
  const [castCategory, setCastCategory] = useState('已收藏')

  function handleClickLearnMore() {
    setIsLearnMore(!isLearnMore);
  }

  function handleChangeCategory(category) {
    setCastCategory(category)
  }
  return (
    <BrowserRouter>
      <NavCastCategoryListContext.Provider value={{ castCategoryList, castCategory, handleChangeCategory }}>
        <PodCastListContext.Provider value={podcastList}>
          <PodCastCardsContext.Provider value={{ podcastCards, isLearnMore, handleClickLearnMore }}>
            <Routes>
              <Route path="login" element={<LoginPage />} />
              <Route path="main" element={<MainPage />} />
              <Route path="favorite" element={<FavoritePage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </PodCastCardsContext.Provider>
        </PodCastListContext.Provider>
      </NavCastCategoryListContext.Provider>
    </BrowserRouter>
  );
}

export default App

import { MainPage, FavoritePage, LoginPage, HomePage } from './page'
import NavEditModal from './component/NavEditModal';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavCastCategoryListContext, PodCastCardsContext, PodCastListContext } from "./context/constContext";
import { useContext, useState } from "react";
import './App.css'
import CardItem from './component/PodcastCards/CardItem';

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
  // edit category Modal觸發
  const [categoryEdit, setCategoryEdit] = useState({category: '', toggle: false});
  const [castCategory, setCastCategory] = useState('')

  

  function handleClickLearnMore() {
    setIsLearnMore(!isLearnMore);
  }

  function handleClickEdit(name) {
    if (!categoryEdit.toggle) {
      setCategoryEdit({
        ...categoryEdit,
        category: name,
        toggle: true,
      });
    } else {
        if (name === categoryEdit.category) {
          setCategoryEdit({
            ...categoryEdit,
            category: '',
            toggle: false,
          });
        } else {
          setCategoryEdit({
            ...categoryEdit,
            category: name,
          });
        }
      }
    }

  function handleChangeCategory(category) {
    setCastCategory(category)
  }
  return (
    <BrowserRouter>
      <NavCastCategoryListContext.Provider
        value={{
          castCategoryList,
          castCategory,
          handleChangeCategory,
          NavEditModal,
          categoryEdit,
          handleClickEdit,
        }}
      >
        <PodCastListContext.Provider value={podcastList}>
          <PodCastCardsContext.Provider
            value={{ podcastCards, isLearnMore, handleClickLearnMore }}
          >
            <Routes>
              <Route path="alphacast/login" element={<LoginPage />} />
              <Route path="alphacast/main" element={<MainPage />} />
              <Route path="alphacast/favorite" element={<FavoritePage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </PodCastCardsContext.Provider>
        </PodCastListContext.Provider>
      </NavCastCategoryListContext.Provider>
    </BrowserRouter>
  );
}
export default App

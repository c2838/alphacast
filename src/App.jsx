import { MainPage, FavoritePage, LoginPage, HomePage } from './page'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavCastCatrgoryListContext, PodCastCardsContext, PodCastListContext } from "./context/constContext";
import { useContext, useState } from "react";
import './App.css'

function App() {
  const CastCatrgoryList = useContext(NavCastCatrgoryListContext);
  const PodcastList = useContext(PodCastListContext)
  const PodcasrCards = useContext(PodCastCardsContext)
  const [castCatrgoryList, setCastCatrgoryList] = useState(CastCatrgoryList);
  const [podcastList, setPodcastList] = useState(PodcastList)
  const [podcastCards, setpodcastCards] = useState(PodcasrCards)
  return (
    <BrowserRouter>
      <NavCastCatrgoryListContext.Provider value={castCatrgoryList}>
        <PodCastListContext.Provider value={podcastList}>
          <PodCastCardsContext.Provider value={podcastCards}>
            <Routes>
              <Route path="login" element={<LoginPage />} />
              <Route path="main" element={<MainPage />} />
              <Route path="favorite" element={<FavoritePage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </PodCastCardsContext.Provider>
        </PodCastListContext.Provider>
      </NavCastCatrgoryListContext.Provider>
    </BrowserRouter>
  );
}

export default App

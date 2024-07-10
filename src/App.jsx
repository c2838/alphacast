import { MainPage, FavoritePage, LoginPage, HomePage } from './page'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { NavCastCatrgoryListContext, PodCastListContext } from "./context/constContext";
import { useContext, useState } from "react";
import './App.css'

function App() {
  const CastCatrgoryList = useContext(NavCastCatrgoryListContext);
  const PodcastList = useContext(PodCastListContext)
  const [castCatrgoryList, setCastCatrgoryList] = useState(CastCatrgoryList);
  const [podcastList, setPodcastList] = useState(PodcastList)
  return (
    <BrowserRouter>
      <NavCastCatrgoryListContext.Provider value={castCatrgoryList}>
        <PodCastListContext.Provider value={podcastList}>
          <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="main" element={<MainPage />} />
            <Route path="favorite" element={<FavoritePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </PodCastListContext.Provider>
      </NavCastCatrgoryListContext.Provider>
    </BrowserRouter>
  );
}

export default App

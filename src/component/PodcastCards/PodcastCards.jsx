import { useContext } from "react";
import cardsStyle from "./PodcastCards.module.scss";
import { PodCastCardsContext } from "../../context/constContext";
import CardItem from "./CardItem";

function CardItems() {
  const { podcastCards: podcastCardData, handleClickLearnMore } = useContext(PodCastCardsContext);
  const cardItems = podcastCardData.map(item => {
    return (
      <CardItem
        key={item.id}
        cover={item.cover}
        title={item.title}
        author={item.author}
        onClick={handleClickLearnMore}
      />
    )
  })
  return <>{cardItems}</>;
}

export default function PodcastCards() {
  return (
    <div className={cardsStyle.cardsContainer}>
      <CardItems />
    </div>
  );
}

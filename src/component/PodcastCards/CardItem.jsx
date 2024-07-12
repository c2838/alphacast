import cardStyle from './CardItem.module.scss'

export default function CardItem({ cover, title, author, onClick }) {
  return (
    <div className={cardStyle.cardContainer}>
      <img src={cover} alt="cover-img" className={cardStyle.cover} />
      <div className={cardStyle.cardInfo}>
        <h4 className={cardStyle.castTitle}>{title}</h4>
        <span className={cardStyle.castAuthor}>{author}</span>
        <button className={cardStyle.moreInfo} onClick={onClick}>
          <span className={cardStyle.moreText}>更多</span>
        </button>
      </div>
    </div>
  );
}
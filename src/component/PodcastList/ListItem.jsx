import startPlayingImg from '../../assets/start-playing.svg'
import lsItemStyle from './ListItem.module.scss'

export default function ListItem({ id, cover, title, icon, introduction, uploadDate, duration }) {
  return (
    <div key={id} className={lsItemStyle.itemContainer}>
      <img src={cover} alt="" className={lsItemStyle.castCover} />
      <div className={lsItemStyle.castInfo}>
        <div className={lsItemStyle.titleGroup}>
          <h5 className={lsItemStyle.title}>{title}</h5>
          <img src={icon} alt="favor-icon" className="favIcon" />
        </div>
        <p className={lsItemStyle.introduction}>{introduction}</p>
        <div className={lsItemStyle.playingInfo}>
          <img src={startPlayingImg} alt="start" className={lsItemStyle.startPlaying} />
          <span className={lsItemStyle.timeInfo}>
            {uploadDate}·{duration}
          </span>
        </div>
      </div>
    </div>
  );
}
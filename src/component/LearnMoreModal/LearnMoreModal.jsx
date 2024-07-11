import { useContext } from 'react'
import { ListItem } from '../PodcastList'
import closeIcon from '../../assets/close-icon.svg'
import learnStyle from './LearnMoreModal.module.scss'
import { PodCastCardsContext } from '../../context/constContext'
import { PodCastListContext } from "../../context/constContext";

function LearnMoreModalContainer({ children }) {
  return (
    <div className={learnStyle.learnMoreModalContainer}>
      {children}
    </div>
  )
}

function ListItems() {
  const podcastListData = useContext(PodCastListContext);
  const listItems = podcastListData.map((item) => {
    return (
      <ListItem
        key={item.id}
        containerClassName={learnStyle.lsItemContainer}
        cover={item.cover}
        title={item.title}
        icon={item.icon}
        introduction={item.introduction}
        uploadDate={item.uploadDate}
        duration={item.duration}
      />
    );
  });
  return <>{listItems}</>;
}



export default function LearnMoreModal() {
  const { podcastCards: channelData, handleClickLearnMore } = useContext(PodCastCardsContext);
  return (
    <LearnMoreModalContainer>
      <div className={learnStyle.channelGroup}>
        <img
          src={channelData[0].cover}
          alt=""
          className={learnStyle.channelCover}
        />
        <div className={learnStyle.channelInfo}>
          <div className={learnStyle.channelTitleGroup}>
            <h3 className={learnStyle.channelTitle}>{channelData[0].title}</h3>
            <div className="closeBtn">
              <button onClick={handleClickLearnMore}>
                <img src={closeIcon} alt="close-modal" />
              </button>
            </div>
          </div>
          <span className={learnStyle.channelAuthor}>
            {channelData[0].author}
          </span>
          <p className={learnStyle.channelIntroduction}>
            {channelData[0].introduction}
          </p>
          <div className={learnStyle.channelDelete}>
            <button className={learnStyle.delBtn}>刪除</button>
          </div>
        </div>
      </div>
      <span className={learnStyle.divider} />
      <ListItems />
    </LearnMoreModalContainer>
  );
}
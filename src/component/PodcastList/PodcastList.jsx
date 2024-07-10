import { useContext } from 'react'
import listStyle from './PodcastList.module.scss'
import { PodCastListContext } from '../../context/constContext'
import ListItem from './ListItem'

function ListItems() {
  const podcastListData = useContext(PodCastListContext)
  const listItems = podcastListData.map(item => {
    return (
      <ListItem
        key={item.id}
        cover={item.cover}
        title={item.title}
        icon={item.icon}
        introduction={item.introduction}
        uploadDate={item.uploadDate}
        duration={item.duration}
      />
    )
  })
  return <>{listItems}</>
}

export default function PodcastList() {
  return (
  <div className={listStyle.ListContainer}>
    <ListItems />
  </div>
  );
}
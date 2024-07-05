import { useContext } from "react";
import { NavCastListContext } from "../../context/constContext";
import castItemStyle from './CastItem.module.scss'


export default function CastItem() {
  const castList = useContext(NavCastListContext)
  const ListItems = castList.map(item => {
    return (
      <li key={item.id} className={castItemStyle.listItem}>
        <div className={castItemStyle.castTitleGroup}>
          <span className={castItemStyle.listIcon}>{item.icon}</span>
          <span className={castItemStyle.listName}>{item.name}</span>
          <button className={castItemStyle.moreBtn}>
            <span className={castItemStyle.moreIcon} />
          </button>
        </div>
      </li>
    );
  })
  return <>{ListItems}</>;
}
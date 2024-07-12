import categoryItemStyle from "./CategoryItem.module.scss";


export default function CategoryItem({ listStyle, icon, name, onClick }) {
  return (
    <li className={listStyle}>
      <div className={categoryItemStyle.categoryTitleGroup}>
        <button onClick={() => onClick(name)}>
          <span className={categoryItemStyle.listIcon}>{icon}</span>
          <span className={categoryItemStyle.listName}>{name}</span>
        </button>
        <button className={categoryItemStyle.moreBtn}>
          <span className={categoryItemStyle.moreIcon} />
        </button>
      </div>
    </li>
  )
}
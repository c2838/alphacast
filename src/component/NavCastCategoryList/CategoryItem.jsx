import categoryItemStyle from "./CategoryItem.module.scss";


export default function CategoryItem({ id, icon, name }) {
  return (
    <li key={id} className={categoryItemStyle.listItem}>
      <div className={categoryItemStyle.categoryTitleGroup}>
        <span className={categoryItemStyle.listIcon}>{icon}</span>
        <span className={categoryItemStyle.listName}>{name}</span>
        <button className={categoryItemStyle.moreBtn}>
          <span className={categoryItemStyle.moreIcon} />
        </button>
      </div>
    </li>
  )
}
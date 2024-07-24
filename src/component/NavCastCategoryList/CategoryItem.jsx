import { Link } from "react-router-dom";
import { useContext } from "react";
import { NavCastCategoryListContext } from "../../context/constContext";
import categoryItemStyle from "./CategoryItem.module.scss";


export default function CategoryItem({ listItemStyle, icon, name, handleChangeCategory, categoryEdit, handleClickEdit }) {
  const { NavEditModal } = useContext(NavCastCategoryListContext);
  function listLink(name) {
    return (
      <Link
        to={name === "已收藏" ? "/alphacast/favorite" : "/alphacast/main"}
        className={categoryItemStyle.listLink}
      >
        <button onClick={() => handleChangeCategory(name)}>
          <span className={categoryItemStyle.listIcon}>{icon}</span>
          <span className={categoryItemStyle.listName}>{name}</span>
        </button>
      </Link>
    );
  }

  return (
    <li className={listItemStyle}>
      <div className={categoryItemStyle.categoryTitleGroup}>
        {listLink(name)}
        <button
          className={categoryItemStyle.moreBtn}
          onClick={() => handleClickEdit(name)}
        >
          <span className={categoryItemStyle.moreIcon} />
        </button>
      </div>
      {(categoryEdit.category === name && categoryEdit.toggle ) && <NavEditModal />}
    </li>
  );
}
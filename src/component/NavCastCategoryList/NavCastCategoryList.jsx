import { useContext } from 'react';
import { NavCastCategoryListContext } from '../../context/constContext';
import plusIcon from '../../assets/plus-icon.svg'
import CategoryItem from "./CategoryItem";
import castListStyle from "./NavCastCategoryList.module.scss";
import categoryItemStyle from "./CategoryItem.module.scss";
import { useLocation } from 'react-router-dom';

function CastCategory() {
  const {
    castCategoryList: castCategoryItems,
    castCategory,
    handleChangeCategory,
    categoryEdit,
    handleClickEdit,
  } = useContext(NavCastCategoryListContext);
  const location = useLocation()
  const chosenStyle = (item) => {
    return item.name === castCategory
      ? categoryItemStyle.listItemActive
      : categoryItemStyle.listItem;
  }
  let castCategorys = castCategoryItems.map((item) => {
    let style = null;
    if (location.pathname === '/alphacast/favorite' && item.name === '已收藏') {
      style = categoryItemStyle.listItemActive
    } else style = chosenStyle(item)
    return (
      <CategoryItem
        key={item.id}
        listItemStyle={style}
        icon={item.icon}
        name={item.name}
        handleChangeCategory={handleChangeCategory}
        categoryEdit={categoryEdit}
        handleClickEdit={handleClickEdit}
      />
    );
  });
  return <>{castCategorys}</>
}



export default function NavCastCategoryList() {
  const { handleClickAddCategory } = useContext(NavCastCategoryListContext)
  return (
    <ul className={castListStyle.castListContainer}>
      <CastCategory />
      <button
        className={castListStyle.plusBtn}
        onClick={handleClickAddCategory}
      >
        <img className={castListStyle.btnImg} src={plusIcon} alt="plus-icon" />
        <span className={castListStyle.btnText}>新增分類</span>
      </button>
    </ul>
  );
}
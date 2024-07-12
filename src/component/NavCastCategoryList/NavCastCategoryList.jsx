import { useContext, useEffect } from 'react';
import { NavCastCategoryListContext } from '../../context/constContext';
import plusIcon from '../../assets/plus-icon.svg'
import CategoryItem from "./CategoryItem";
import castListStyle from "./NavCastCategoryList.module.scss";
import categoryItemStyle from "./CategoryItem.module.scss";

function CastCategory() {
  const {
    castCategoryList: castCategoryItems,
    castCategory,
    handleChangeCategory,
  } = useContext(NavCastCategoryListContext);
  const chosenStyle = (item) => {
    return item.name === castCategory
      ? categoryItemStyle.listItemActive
      : categoryItemStyle.listItem;
  }
  let castCategorys = castCategoryItems.map((item) => {
    console.log(chosenStyle(item));
    let style = chosenStyle(item);
    return (
      <CategoryItem
        key={item.id}
        listStyle={style}
        icon={item.icon}
        name={item.name}
        onClick={handleChangeCategory}
      />
    )
  });
  return <>{castCategorys}</>
}



export default function NavCastCategoryList() {
  return (
    <ul className={castListStyle.castListContainer}>
      <CastCategory />
      <button className={castListStyle.plusBtn}>
        <img className={castListStyle.btnImg} src={plusIcon} alt="plus-icon" />
        <span className={castListStyle.btnText}>新增分類</span>
      </button>
    </ul>
  );
}
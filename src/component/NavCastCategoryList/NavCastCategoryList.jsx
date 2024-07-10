import { useContext } from 'react';
import { NavCastCatrgoryListContext } from '../../context/constContext';
import plusIcon from '../../assets/plus-icon.svg'
import CategoryItem from "./CategoryItem";
import castListStyle from "./NavCastCategoryList.module.scss";

function CastCategory() {
  const castCategoryItems = useContext(NavCastCatrgoryListContext);
  const castCategory= castCategoryItems.map(item => {
    return (
      <CategoryItem id={item.id} icon={item.icon} name={item.name} />
    )
  })
  return <>{castCategory}</>
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
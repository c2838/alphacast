import plusIcon from '../../assets/plus-icon.svg'
import CastItem from './CastItem'
import castListStyle from './NavCastList.module.scss'

export default function NavCastList() {
  return (
    <ul className={castListStyle.castListContainer}>
      <CastItem />
      <button className={castListStyle.plusBtn}>
        <img className={castListStyle.btnImg} src={plusIcon} alt="plus-icon" />
        <span className={castListStyle.btnText}>新增分類</span>
      </button>
    </ul>
  );
}
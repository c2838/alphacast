import plusIcon from '../../assets/plus-icon.svg'
import CastItem from './CastItem'
import castListStyle from './NavCastList.module.scss'

function NavCastListContainer({ children }) {
  return (
    <ul className={castListStyle.castListContainer}>
      {children}
    </ul>
  )
}

export default function NavCastList() {
  return(
    <NavCastListContainer>
      <CastItem />
      <button className={castListStyle.plusBtn}>
        <img className={castListStyle.btnImg} src={plusIcon} alt="plus-icon" />
        <span className={castListStyle.btnText}>新增分類</span>
      </button>
    </NavCastListContainer>
  )
}
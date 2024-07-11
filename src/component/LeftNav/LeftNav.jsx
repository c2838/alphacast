import NavCastCategoryList from "../NavCastCategoryList";
import logoImg from '../../assets/logo.svg'
import navStyle from './LeftNav.module.scss'

export default function LeftNav() {
  return (
    <section className={navStyle.NavContainer}>
      <div className={navStyle.logoGroup}>
        <img className={navStyle.logoImg} src={logoImg} alt="logo" />
        <span className={navStyle.divider} />
      </div>
      <NavCastCategoryList />
    </section>
  );
}
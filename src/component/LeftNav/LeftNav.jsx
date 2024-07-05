import NavCastList from '../NavCastList/NavCastList';
import logoImg from '../../assets/logo.svg'
import navStyle from './LeftNav.module.scss'


function LeftNavContainer({ children }) {
  return(
    <section className={navStyle.NavContainer}>
      {children}
    </section>
  )
}

export default function LeftNav() {
  return (
    <LeftNavContainer>
      <div className={navStyle.logoGroup}>
        <img className={navStyle.logoImg} src={logoImg} alt="logo" />
        <span className={navStyle.divider} />
      </div>
      <NavCastList />
    </LeftNavContainer>
  );
}
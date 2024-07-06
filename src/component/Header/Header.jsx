import Avator from '../../assets/user-avator.jpg'
import downArrow from "../../assets/down-arrow.svg";
import headerStyle from './Header.module.scss'


export default function Header() {
  return (
    <section className={headerStyle.headerContainer}>
      <span className={headerStyle.greetingTitle}>早安</span>
      <div className={headerStyle.userSettingGroup}>
        <div className={headerStyle.userAvatorContainer}>
          <img className={headerStyle.userAvator} src={Avator} alt="avator" />
        </div>
        <span className={headerStyle.userName}>John Doe</span>
        <button className={headerStyle.dropDown}>
          <img className={headerStyle.dropDownIcon} src={downArrow} alt="down-arrow" />
        </button>
      </div>
    </section>
  );
}
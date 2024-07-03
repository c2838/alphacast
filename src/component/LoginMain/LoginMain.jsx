import logoImg from '../../assets/logo.svg'
import LoginMainStyle from "./LoginMain.module.scss";

function LoginMainContainer({ children }) {
  return(
    <section className={LoginMainStyle.loginMainContainer}>
      {children}
    </section>
  )
}

export default function LoginMain() {
  return (
    <LoginMainContainer>
      <div className={LoginMainStyle.mainContent}>
        <div className={LoginMainStyle.logoGroup}>
          <img className={LoginMainStyle.logoImg} src={logoImg} alt="logo" />
          <span className={LoginMainStyle.logoSlogan}>
            Connecting Stories That Matter
          </span>
        </div>
        <div className={LoginMainStyle.inputGroup}>
          <button className={LoginMainStyle.spotifySignupBtn}>
            <span>使用 SPOTIFY 帳號登入</span>
          </button>
          <div className={LoginMainStyle.signupGroup}>
            <span>沒有帳號嗎?</span>
            <button className={LoginMainStyle.signupBtn}>
              <span>註冊帳號</span>
            </button>
          </div>
        </div>
        <div className={LoginMainStyle.loginFooter}>
          <span className={LoginMainStyle.copyright}>copyright 2023</span>
        </div>
      </div>
    </LoginMainContainer>
  );
}
import loginImg_1 from '../../assets/loginImg_1.svg'
import rightArrowImg from '../../assets/right-arrow.svg'
import leftArrowImg from "../../assets/left-arrow.svg";
import loginImgStyle from './LoginImg.module.scss'


function LoginImgContainer({ children }) {
  return (
    <section className={loginImgStyle.LoginImgContainer}>
      { children }
    </section>
  );
}

export default function LoginImg() {
  return (
    <LoginImgContainer>
      <img className={loginImgStyle.leftArrowImg} src={leftArrowImg} alt="left-arrow" />
      <div className={loginImgStyle.adGroup}>
        <img className={loginImgStyle.loginImg} src={loginImg_1} alt="ad-img" />
        <div className={loginImgStyle.adInfo}>
          <span className={loginImgStyle.infoTitle}>鼓舞人心的故事</span>
          <span className={loginImgStyle.infoSubtitle}>
            從非凡的人生故事和成功經歷中獲得靈感
          </span>
        </div>
        <div className={loginImgStyle.progressLine}>
          <span className={loginImgStyle.lineItemActive} />
          <span className={loginImgStyle.lineItem} />
          <span className={loginImgStyle.lineItem} />
        </div>
      </div>
      <img className={loginImgStyle.rightArrowImg} src={rightArrowImg} alt="right-arrow" />
    </LoginImgContainer>
  );
}
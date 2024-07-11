import rightArrowImg from '../../assets/right-arrow.svg'
import leftArrowImg from "../../assets/left-arrow.svg";
import loginImgStyle from './LoginImg.module.scss'
import { useContext, useState, useEffect } from 'react';
import { LoginInfosContext } from '../../context/constContext';


function LoginImgContainer({ children }) {
  return (
    <section className={loginImgStyle.LoginImgContainer}>
      { children }
    </section>
  );
}

export default function LoginImg() {
  const loginInfos = useContext(LoginInfosContext);
  const [currentInfo, setCurrentInfo] = useState(loginInfos[0]);

  function handleNext() {
    setCurrentInfo((prev) => {
      const nextInfoId = prev.id >= loginInfos.length ? 1 : prev.id + 1;
      return loginInfos.find((info) => info.id === nextInfoId);
    });
  }
  function handlePrevous() {
    setCurrentInfo((prev) => {
      const prevInfoId = prev.id <= 1 ? 3 : prev.id - 1;
      return loginInfos.find((info) => info.id === prevInfoId);
    });
  }

  useEffect(() => {
    const timer = setTimeout(handleNext, 3000);
    return () => clearTimeout(timer);
  }, [currentInfo]);


  return (
    <LoginImgContainer>
      <button onClick={handlePrevous}>
        <img
          className={loginImgStyle.leftArrowImg}
          src={leftArrowImg}
          alt="left-arrow"
        />
      </button>
      <div className={loginImgStyle.adGroup}>
        <img
          className={loginImgStyle.loginImg}
          src={currentInfo.img}
          alt="ad-img"
        />
        <div className={loginImgStyle.adInfo}>
          <span className={loginImgStyle.infoTitle}>{currentInfo.title}</span>
          <span className={loginImgStyle.infoSubtitle}>
            {currentInfo.subTitle}
          </span>
        </div>
        <div className={loginImgStyle.progressLine}>
          <span
            className={
              currentInfo.id === 1
                ? loginImgStyle.lineItemActive
                : loginImgStyle.lineItem
            }
          />
          <span
            className={
              currentInfo.id === 2
                ? loginImgStyle.lineItemActive
                : loginImgStyle.lineItem
            }
          />
          <span
            className={
              currentInfo.id === 3
                ? loginImgStyle.lineItemActive
                : loginImgStyle.lineItem
            }
          />
        </div>
      </div>
      <button onClick={handleNext}>
        <img
          className={loginImgStyle.rightArrowImg}
          src={rightArrowImg}
          alt="right-arrow"
        />
      </button>
    </LoginImgContainer>
  );
}
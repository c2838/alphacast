import LoginMain from "../component/LoginMain";
import LoginImg from "../component/LoginImg"
import LoginPageStyle from "./LoginPage.module.scss";
import { useContext } from "react";
import { LoginInfosContext } from "../context/constContext";


function LoginPageContainer({ children }) {
  return (
    <main className={LoginPageStyle.LoginPageContainer}>
      {children}
    </main>
  )
}

export default function LoginPage() {
  const loginInfos = useContext(LoginInfosContext)
  return (
    <LoginInfosContext.Provider value={loginInfos}>
      <LoginPageContainer>
        <LoginMain />
        <LoginImg />
      </LoginPageContainer>
    </LoginInfosContext.Provider>
  );
}

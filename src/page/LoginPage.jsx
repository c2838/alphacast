import LoginMain from "../component/LoginMain";
import LoginImg from "../component/LoginImg"
import LoginPageStyle from "./LoginPage.module.scss";

function LoginPageContainer({ children }) {
  return (
    <main className={LoginPageStyle.LoginPageContainer}>
      {children}
    </main>
  )
}

export default function LoginPage() {
  return (
    <LoginPageContainer>
      <LoginMain />
      <LoginImg />
    </LoginPageContainer>
  );
}

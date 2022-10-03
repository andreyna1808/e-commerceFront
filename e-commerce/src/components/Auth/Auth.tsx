import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Auth = (props) => {
  const { onCloseModal, setTitleModal } = props;
  const [showLogin, setShowLogin] = useState(false);

  const showLoginForm = () => {
    setTitleModal("Login");
    setShowLogin(true);
  };

  const showRegisterForm = () => {
    setTitleModal("Create a new account");
    setShowLogin(false);
  };

  return showLogin ? <LoginForm showLoginForm={showLoginForm} /> : <RegisterForm showRegisterForm={showRegisterForm}/>;
};

export default Auth;

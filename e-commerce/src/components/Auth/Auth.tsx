import { useEffect, useState } from "react";
import { getToken } from "../../utils/api/token";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import UserAccount from "./UserAccount";

const Auth = (props) => {
  const { onCloseModal } = props;
  const [showLogin, setShowLogin] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const token = getToken();
    if (token) {
      setIsLogin(true);
    }
  }, [isLogin]);

  const verifyModal = () => {
    if (isLogin) {
      return (
        <UserAccount setShowLogin={setShowLogin} setIsLogin={setIsLogin} onCloseModal={onCloseModal} />
      );
    } else if (showLogin) {
      return (
        <LoginForm setShowLogin={setShowLogin} onCloseModal={onCloseModal} />
      );
    } else {
      return (
        <RegisterForm setShowLogin={setShowLogin} onCloseModal={onCloseModal} />
      );
    }
  };

  return verifyModal();
};

export default Auth;

import { useEffect, useState } from "react";
import ForgotPassword from "./ForgotPassword";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import UserAccount from "./UserAccount";

const Auth = (props) => {
  const { onCloseModal, token } = props;
  const [modalType, setShowModalType] = useState("login");

  useEffect(() => {
    if (token) {
      setShowModalType("logged");
    }
  }, [modalType, token]);

  const verifyModal = () => {
    switch (modalType) {
      case "login":
        return (
          <LoginForm
            setShowModalType={setShowModalType}
            onCloseModal={onCloseModal}
          />
        );
      case "register":
        return (
          <RegisterForm
            setShowModalType={setShowModalType}
            onCloseModal={onCloseModal}
          />
        );
      case "logged":
        return (
          <UserAccount
            setShowModalType={setShowModalType}
            onCloseModal={onCloseModal}
          />
        );
      case "forgotPassword":
        return (
          <ForgotPassword
            setShowModalType={setShowModalType}
            onCloseModal={onCloseModal}
          />
        );
      default:
        break;
    }
  };

  return verifyModal();
};

export default Auth;

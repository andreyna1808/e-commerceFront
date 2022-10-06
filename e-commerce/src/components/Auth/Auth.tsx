import { useEffect, useState } from "react";
import { getToken } from "../../utils/api/token";
import ForgotPassword from "./ForgotPassword";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import UserAccount from "./UserAccount";

const Auth = (props) => {
  const { onCloseModal } = props;
  const [modalType, setShowModalType] = useState("login");

  useEffect(() => {
    const token = getToken();
    if (token) {
      setShowModalType("logged");
    }
  }, [modalType]);

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

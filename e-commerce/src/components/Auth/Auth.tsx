import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Auth = (props) => {
  const { onCloseModal } = props;
  const [showLogin, setShowLogin] = useState(false);

  return showLogin ? <LoginForm setShowLogin={setShowLogin} /> : <RegisterForm setShowLogin={setShowLogin}/>;
};

export default Auth;

import SignupForm from "./SignupForm/SignupForm";
import LoginForm from "./LoginForm/LoginForm";
import { useState } from "react";
const Auth: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const handleSwitchForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div>
      {isSignUp ? (
        <SignupForm onSwitchForm={handleSwitchForm} />
      ) : (
        <LoginForm onSwitchForm={handleSwitchForm} />
      )}
    </div>
  );
};

export default Auth;

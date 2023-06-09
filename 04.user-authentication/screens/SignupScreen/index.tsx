import { useState } from 'react';
import AuthContent from '../../components/Auth/AuthContent';
import { createUser } from '../../utils/auth';
import { UserInputs } from '../../utils/types';
import LoadingOverlay from '../../components/ui/LoadingOverlay';

const SignupScreen = () => {
  const [isAuthentacting, setIsAuthentacting] = useState(false);

  const signupHandler = async ({ email, password }: UserInputs) => {
    try {
      if (email && password) {
        setIsAuthentacting(true);
        await createUser(email, password);
        setIsAuthentacting(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (isAuthentacting) {
    return <LoadingOverlay message="Creating user" />;
  }

  return (
    <AuthContent
      onAuthenticate={signupHandler}
      //
      isLogin={false}
      //
    />
  );
};

export default SignupScreen;

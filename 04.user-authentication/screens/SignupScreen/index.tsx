import { useState } from 'react';
import AuthContent from '../../components/Auth/AuthContent';
import { createUser } from '../../utils/auth';
import { UserInputs } from '../../utils/types';
import LoadingOverlay from '../../components/ui/LoadingOverlay';
import { Alert } from 'react-native';

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
      Alert.alert(
        'Authentication failed',
        'Could not create user, please check your input and try again later.'
      );
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

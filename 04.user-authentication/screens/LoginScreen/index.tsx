import { useState } from 'react';
import AuthContent from '../../components/Auth/AuthContent';
import { login } from '../../utils/auth';
import { UserInputs } from '../../utils/types';
import LoadingOverlay from '../../components/ui/LoadingOverlay';
import { Alert } from 'react-native';

const LoginScreen = () => {
  const [isAuthentacting, setIsAuthentacting] = useState(false);

  const loginHandler = async ({ email, password }: UserInputs) => {
    try {
      if (email && password) {
        setIsAuthentacting(true);
        await login(email, password);
        setIsAuthentacting(false);
      }
    } catch (error) {
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials or try again later!'
      );
      console.error(error);
    }
  };

  if (isAuthentacting) {
    return <LoadingOverlay message="logging you in" />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
};

export default LoginScreen;

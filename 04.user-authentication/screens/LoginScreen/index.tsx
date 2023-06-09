import { useContext, useState } from 'react';
import AuthContent from '../../components/Auth/AuthContent';
import { login } from '../../utils/auth';
import { UserInputs } from '../../utils/types';
import LoadingOverlay from '../../components/ui/LoadingOverlay';
import { Alert } from 'react-native';
import { AuthContext } from '../../context/auth.context';

const LoginScreen = () => {
  const [isAuthentacting, setIsAuthentacting] = useState(false);
  const { authenticate } = useContext(AuthContext);

  const loginHandler = async ({ email, password }: UserInputs) => {
    setIsAuthentacting(true);
    try {
      if (email && password) {
        const token = await login(email, password);
        authenticate(token);
      }
    } catch (error) {
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials or try again later!'
      );
    }
    setIsAuthentacting(false);
  };

  if (isAuthentacting) {
    return <LoadingOverlay message="logging you in" />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
};

export default LoginScreen;

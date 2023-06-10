import { useContext, useState } from 'react';
import AuthContent from '../../components/Auth/AuthContent';
import { createUser } from '../../utils/auth';
import { UserInputs } from '../../utils/types';
import LoadingOverlay from '../../components/ui/LoadingOverlay';
import { Alert } from 'react-native';
import { AuthContext } from '../../context/auth.context';

const SignupScreen = () => {
  const [isAuthentacting, setIsAuthentacting] = useState(false);
  const { authenticate } = useContext(AuthContext);

  const signupHandler = async ({ email, password }: UserInputs) => {
    setIsAuthentacting(true);
    try {
      if (email && password) {
        const token = await createUser(email, password);
        authenticate(token);
      }
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not create user, please check your input and try again later.'
      );
      setIsAuthentacting(false);
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

import { useState } from 'react';
import { Alert, View } from 'react-native';
import styles from './styles';
import FlatButton from '../../ui/Flat Button';
import AuthForm from '../AuthForm';
import { UseNavigationHookProp, UserInputs } from '../../../utils/types';
import { useNavigation } from '@react-navigation/native';

type AuthContentProps = {
  isLogin: boolean;
  onAuthenticate: ({ email, password }: UserInputs) => void;
};

const AuthContent = ({ isLogin, onAuthenticate }: AuthContentProps) => {
  const { replace } = useNavigation<UseNavigationHookProp>();
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  function switchAuthModeHandler() {
    if (isLogin) {
      replace('Signup');
    } else {
      replace('Login');
    }
  }

  function submitHandler(credentials: UserInputs) {
    let { email, confirmEmail, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ email, password });
  }

  return (
    <View style={styles.authContent}>
      <AuthForm
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <View style={styles.buttons}>
        <FlatButton onPress={switchAuthModeHandler}>
          {isLogin ? 'Create a new user' : 'Log in instead'}
        </FlatButton>
      </View>
    </View>
  );
};
export default AuthContent;

import AuthContent from '../../components/Auth/AuthContent';

const LoginScreen = () => {
  return (
    <AuthContent
      isLogin
      //
      onAuthenticate={() => console.log('ok')}
    />
  );
};

export default LoginScreen;

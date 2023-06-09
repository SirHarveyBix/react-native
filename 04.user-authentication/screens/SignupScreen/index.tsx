import AuthContent from '../../components/Auth/AuthContent';

const SignupScreen = () => {
  return (
    <AuthContent
      //
      isLogin={false}
      onAuthenticate={() => console.log('ok')}
      //
    />
  );
};

export default SignupScreen;

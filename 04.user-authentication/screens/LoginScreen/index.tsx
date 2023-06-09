import AuthContent from '../../components/Auth/AuthContent';

const LoginScreen = () => {
  return (
    <AuthContent
      isLogin
      //
      onAuthenticate={function ({
        email,
        password,
      }: {
        [key: string]: string;
      }): void {
        throw new Error('Function not implemented.');
      }}
    />
  );
};

export default LoginScreen;

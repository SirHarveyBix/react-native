import AuthContent from '../../components/Auth/AuthContent';

const SignupScreen = () => {
  return (
    <AuthContent
      //
      isLogin={false}
      onAuthenticate={function ({
        email,
        password,
      }: {
        [key: string]: string;
      }): void {
        throw new Error('Function not implemented.');
      }}
      //
    />
  );
};

export default SignupScreen;

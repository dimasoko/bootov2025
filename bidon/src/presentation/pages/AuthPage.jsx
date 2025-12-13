import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import AuthForm from '../../presentation/components/forms/AuthForm';

const AuthPage = () => {
  return (
    <div>
      <Header />
      <AuthForm />
      <Footer />
    </div>
  );
};

export default AuthPage; 
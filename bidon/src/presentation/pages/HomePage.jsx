import Header from '../components/layout/Header';
import Screaming from '../../presentation/components/ui/HomePage/BigLogo';
import Footer from '../components/layout/Footer';
import MainTitle from '../../presentation/components/ui/HomePage/MainTitle';
import FeatureSection from '../../presentation/components/ui/HomePage/FeatureSection';
import IWanna from '../../presentation/components/ui/HomePage/ShadedButton';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Screaming />
      <MainTitle />
      <FeatureSection />
      <IWanna />
      <Footer />
    </div>
  );
};

export default HomePage; 
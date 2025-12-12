import Header from '../components/Header';
import Screaming from '../components/HomePage/Screaming';
import Footer from '../components/Footer';
import MainTitle from '../components/HomePage/MainTitle';
import FeatureSection from '../components/HomePage/FeatureSection';
import IWanna from '../components/HomePage/IWanna';

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
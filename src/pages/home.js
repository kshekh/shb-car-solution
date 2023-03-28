import Header from '../components/Homepage/Header';
import Footer from '../components/Layout/Footer';
import HomeHero from '../components/Homepage/HomeHero';
import StatsLocation from '../components/Homepage/StatsLocation';
import WeOffers from '../components/Homepage/WeOffers';
import OnlineBookWork from '../components/Homepage/OnlineBookWork';
 

function home() {
  return (
    <div className="App">
        <div className='absolute inset-x-0 top-0 z-10'><Header /></div> 
          <HomeHero />
          <StatsLocation />
          <WeOffers />
          <OnlineBookWork />
          <Footer />    
    </div>
  );
}

export default home;

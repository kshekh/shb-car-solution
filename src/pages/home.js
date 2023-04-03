import Header from '../components/Homepage/Header';
import HomeHero from '../components/Homepage/HomeHero';
import StatsLocation from '../components/Homepage/StatsLocation';
import WeOffers from '../components/Homepage/WeOffers';
import OnlineBookWork from '../components/Homepage/OnlineBookWork';
// import Layout from './layout';
 

function home() {
  return (
    
      <div className="App">
        <div className="absolute inset-x-0 top-0 z-40">
          <Header />
        </div>
        <HomeHero />
        <StatsLocation />
        <WeOffers />
        <OnlineBookWork />
      </div>
     
  );
}

export default home;

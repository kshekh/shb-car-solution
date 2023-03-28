import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Profile from '../components/Profile/Profile';
 
function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
        <Header />
          <main className="flex-1">
            <Profile />
          </main>
        <Footer />    
    </div>
  );
}

export default Layout;

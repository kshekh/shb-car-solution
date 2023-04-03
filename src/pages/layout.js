import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer'; 
 
function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

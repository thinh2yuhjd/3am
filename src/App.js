import './App.css';
import Footer from './component/footer/footer';
import Header from './component/header/header';
import Home from './page/home/home';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const clientId = "402693424713-vmjdp7vrg54377818e91sb58hndm09em.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;

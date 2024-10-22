import './App.css';
import Footer from './component/footer/footer';
import Header from './component/header/header';
import Home from './page/home/home';

function App() {
  return (
    <div className="App">
      <Header/>
        <Home/>
        <Footer/>
    </div>
  );
}

export default App;

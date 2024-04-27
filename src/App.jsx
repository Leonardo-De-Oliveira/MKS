import Footer from './Components/Footer';
import Header from './Components/Header';
import Products from './Containers/Products';
import './sass/app.sass';

function App() {
  return (
    <div className="App">

        <Header />
      
        <Products />
      
        <Footer />
        
    </div>
  );
}

export default App;

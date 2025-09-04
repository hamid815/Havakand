
import './App.css';
import 'boxicons/css/boxicons.min.css';

import Header from './components/Header';
import Home from './components/Home';
import Menyu from './components/Menyu';
import Topproducts from './components/Topproducts';
import Bakery from './components/Bakery';
import Kruassan from './components/Kruassan';
import Pishiriqlar from './components/Pishiriqlar';
import Biz from './components/Biz';
import HavakandBakery from './components/HavakandBakery';
import Mijozlar from './components/Mijozlar';
import Buyurtma from './components/Buyurtma';
import Footer from './components/Fooder';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Menyu/>
      <Topproducts/>
      <Bakery/>
      <Kruassan/>
      <Pishiriqlar/>
      <Biz/>
      <HavakandBakery/>
      <Mijozlar/>
      <Buyurtma/>
      <Footer/>
    </div>
  );
}

export default App;

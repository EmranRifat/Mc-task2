import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Pages/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Banner from './Pages/Banner/Banner';
import Card from './Pages/Card/Card';
import BannerTwo from './Pages/BannerTwo/BannerTwo';
import Services from './Pages/Services/Services';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="banner" element={<Banner></Banner>} />
        <Route path="card" element={<Card></Card>} />
        <Route path="bannertwo" element={<BannerTwo></BannerTwo>} />
        <Route path="services" element={<Services></Services>} />
      </Routes>
    </div>
  );
}

export default App;

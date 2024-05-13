// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Homecomp from './Component/Home/Homecomp';
import AppbarComp from './Component/AppbarComp';
import AboutComp from './Component/About/AboutComp';
import Footer from './Component/Footer';
import ContactComp from './Component/Contact/ContactComp';
// import AdoptComp from './Component/Adoption/AdoptComp';
import AdoptionComp from './Component/Adoption/AdoptionComp';
import BlogComp from './Component/Blog/BlogComp';
import SingleComp from './Component/Adoption/SingleComp';
import ShopComp from './Component/Shop/ShopComp';
import SingleshopComp from './Component/Shop/SingleshopComp';
// import LoginpageComp from '../auth/LoginpageComp';
import LoginComp from './Component/auth/LoginComp';
import SignUpComp from './Component/auth/SignUpComp';


function App() {
  return (
    <div className="App"> 
      <Router>
      <AppbarComp/>
        <Routes>
          <Route path='/' element={<Homecomp/>}/>
          <Route path='/about' element={<AboutComp/>}/>
          <Route path='/Adoption' element={<AdoptionComp/>}/> 
          <Route path='/single-page/:single_id' element={<SingleComp/>}/> 
          <Route path='/singleshop-page/:single_id' element={<SingleshopComp/>}/>
          <Route path='/Blog' element={<BlogComp/>}/> 
          <Route path='/contacts' element={<ContactComp/>}/>
          <Route path='/shop' element={<ShopComp/>}/>
          <Route path='/login' element={<LoginComp/>}/>
          <Route path='/sign-up' element={<SignUpComp/>}/>
   
        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;

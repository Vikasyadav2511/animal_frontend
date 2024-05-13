import logo from "./logo.svg";
import "./App.css";
import SidebarComp from "./component/SidebarComp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Category from "./component/pages/category/Category";
import News from "./component/pages/news/News";
import Companion from "./component/pages/Companion/Companion";
import Shopproduct from "./component/pages/shopproduct/Shopproduct";
import User from "./component/pages/user/User";
import Protectedroute from "./component/Protectedroute";
import Addcategory from "./component/pages/category/Addcategory";
import Edit from "./component/pages/category/Edit";
import Addnews from "./component/pages/news/Addnews";
import Editnews from "./component/pages/news/Editnews";
import AddShop from "./component/pages/shopproduct/AddShop";
import EditShop from "./component/pages/shopproduct/EditShop";
import AddCompaion from "./component/pages/Companion/AddCompaion";
import Editcompanion from "./component/pages/Companion/Editcompanion";
import Login from "./component/auth/Login";
import Signup from "./component/auth/Signup";
import Publicroute from "./component/Publicroute";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          

          <Route path="/" element={<Protectedroute />}>
            <Route path="/category" element={<Category />} />
            <Route path="/add-category" element={<Addcategory />} />
            <Route path="/news" element={<News />} />
            <Route path="/add-news" element={<Addnews />} />
            <Route path="/companion" element={<Companion />} />
            <Route path="/addcompanion" element={<AddCompaion />} />
            <Route path="/editcomp/:comp_id" element={<Editcompanion />} />
            <Route path="/shopproduct" element={<Shopproduct />} />
            <Route path="/shop_product" element={<AddShop />} />
            <Route path="/edit/:edit_id" element={<EditShop />} />
            <Route path="/user" element={<User />} />
            <Route path="/editcat/:category_id" element={<Edit />} />
            <Route path="/news/:news_id" element={<Editnews />} />
          </Route>

          <Route path="/" element={<Publicroute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<Signup />} />
          </Route>  
        </Routes>
      </Router>
      {/* <SidebarComp/> */}
    </div>
  );
}

export default App;

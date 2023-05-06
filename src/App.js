/*
تسكات 
1- هندلت الشكل وتكوين شكل موقع تمت
2-  تمت جعل ثلاث منتجات فقط ف الصفحه الرئسيه
3-  تمت انشاء صقحه منتجات واضافت المنتجات بها 
4- ملاء صفحه الابوي تمت
*/

import About from "./components/About";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";
import ProductsList from "./components/ProductsList";
import Slider from "./components/Slider";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Products />
            </>
          }
        />
        <Route path="about" element={<About />}/>
        <Route path="products" element={<ProductsList />}/>
        <Route path="product/:productId" element={<ProductDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;

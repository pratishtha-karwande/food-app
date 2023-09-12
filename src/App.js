
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header';
import Hotels from "./components/Hotels";
import ContactUs from "./components/ContactUs";
//import LocationPopup from './components/LocationPopup';
//import LocationPopup from './components/LocationPopup';
import NavMenu from "./components/NavMenu";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/hotels' element={<Hotels />} >
            <Route path=':hotelId' element={Hotels} />
           
          
                </Route>

                <Route path='/navmenu' element={<NavMenu />} />
                <Route path="/contact" element={<ContactUs/>}/>
              </Routes>

            </BrowserRouter>

            
          </>

          );
}

          export default App;

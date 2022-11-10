// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Sirojiddin/Home";
import Pricing from './Sirojiddin/PricingCompanent'
import FAQ from "./Sirojiddin/FaqCompanent";
import Contact from "./Sirojiddin/ContactCompanent";
import Footer from "./Sirojiddin/FooterCompanent";
import Error from './Companents/Error'


function App(){
  return(
   <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={ <Contact />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="*" element={<Error />} />
      </Routes>
     </BrowserRouter>
   </>
  );
}

export default App;
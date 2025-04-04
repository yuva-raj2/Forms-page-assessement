import AboutPage from "./Components/About/AboutPage";
import ContactPage from "./Components/Contact/ContactPage";
import HomePage from "./Components/Home/HomePage";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
const App=()=>{
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;
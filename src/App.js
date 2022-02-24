import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import Stories from './Components/Stories/Stories';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Coach from './Components/Coach/Coach';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Element from './Components/Element/Element';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="home" element={<Home />}/>
        <Route path="about" element={<About/>}/>
          <Route path="service" element={<Service />} />
          <Route path="Stories" element={<Stories />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="coach" element={<Coach />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="element" element={<Element />} />
          

    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;

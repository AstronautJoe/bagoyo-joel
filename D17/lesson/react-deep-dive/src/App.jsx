import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FormExample from './pages/FormExample';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/form" element={<FormExample />} />
        <Route path="/products" element={<Products />} >
          <Route path=":id" element={<ProductDetail/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

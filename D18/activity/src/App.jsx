import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />}>
          {/* Route for category only */}
          <Route
            path="/products/category/:selectedCategory"
            element={<Products />}
          />
          {/* Route for category with optional search term */}
          <Route
            path="/products/category/:selectedCategory/search/:searchTerm"
            element={<Products />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

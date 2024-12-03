import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

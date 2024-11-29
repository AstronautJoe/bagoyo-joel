import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DirectoryNavbar from './components/DirectoryNavbar';
import Home from './pages/Home';
import Team from './pages/Team';
import TeamDetails from './pages/TeamDetails';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <DirectoryNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Team />}>
          <Route path=":memberId" element={<TeamDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

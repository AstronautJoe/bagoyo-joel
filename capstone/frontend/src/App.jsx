import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Champion from './pages/Champion';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <BaseLayout>
              <Home />
            </BaseLayout>
          }
        />
        <Route
          path="/log-in"
          element={
            <BaseLayout>
              <LogIn />
            </BaseLayout>
          }
        />
        <Route
          path="/sign-up"
          element={
            <BaseLayout>
              <SignUp />
            </BaseLayout>
          }
        />{' '}
        <Route
          path="/champions/:id"
          element={
            <BaseLayout>
              <Champion />
            </BaseLayout>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

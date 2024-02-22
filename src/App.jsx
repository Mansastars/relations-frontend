import Dashboard from "../src/components/Dashboard"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Profile from "./components/Profile";
// import Dashboard from "../src/components/Dashboard";
import NewDealPage from "../src/components/NewDeal";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  const isSmallScreen = window.innerWidth <= 768;

  if (isSmallScreen) {
    return (
      <Router>
        <Routes>
          <Route path="/auth/sign_up" element={<SignUp />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/alldeals" element={<NewDealPage />} />
          <Route path="/dashboard/:dealId" element={<Navigate to="/move-to-larger-screen" />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/move-to-larger-screen" element={<h2 className="text-center text-xl font-bold mt-20 bg-[#f2f3ff] text-dark-blue">Please move to a larger screen to access the dashboard.</h2>} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    );
  } else {
    return (
      <Router>
        <Routes>
          <Route path="/auth/sign_up" element={<SignUp />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/alldeals" element={<NewDealPage />} />
          <Route path="/dashboard/:dealId" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    );
  }
}

export default App;

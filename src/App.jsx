import Dashboard from "../src/components/Dashboard"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from "./components/Profile";
import Dasboard from "../src/components/Dashboard";
import NewDealPage from "../src/components/NewDeal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/deal" element={<NewDealPage />} />
        <Route path="/dashboard" element={<Dasboard />} />
        <Route path="/profile" element={<Profile />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  )
}

export default App

import Dashboard from "../src/components/Dashboard"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from "./components/Profile";
import Dasboard from "../src/components/Dashboard";
import NewDealPage from "../src/components/NewDeal";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Research from "./components/TableContactsRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth/sign_up" element={ <SignUp /> } />
        <Route path="/auth/login" element={ <Login /> } />
        <Route path="/deals" element={<NewDealPage />} />
        <Route path="/dashboard/:dealId" element={<Dasboard />} />
        <Route path="/profile" element={<Profile />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  )
}

export default App

import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Loader from './components/ReusableComponents/Loader';
import { AuthProvider, useAuth } from './hooks/AuthContext';
import ProtectedRoute from './hooks/ProtectedRoute';
import SidePanel from './components/Pages/SidePanel';
import PaymentSuccessPage from './components/Stripe/PaymentSuccessPage';
import PaymentCancellation from './components/Stripe/PaymentCancellation';
import Billing from './components/Pages/Billing';

// Lazy loading implementation
const SignUp = lazy(() => import("./components/AuthPages/SignUp"));
const Login = lazy(() => import("./components/AuthPages/Login"));
const Dashboard = lazy(() => import("../src/components/Pages/Dashboard"));
const Profile = lazy(() => import("./components/Pages/Profile"));
const NewDealPage = lazy(() => import("../src/components/Pages/NewDeal"));
const MoveToLargeScreen = lazy(() => import("./components/Pages/MoveToLargeScreen"));
const PaymentOption = lazy(() => import("./components/Pages/PaymentOption"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loader />}>
          <AuthProvider>
            <Routes>
              <Route path="/auth/sign_up" element={<SignUp />} />
              <Route path="/auth/login" element={<Login />} />

              {/* Use ProtectedRoute as a Route component */}
              <Route path="/alldashboards" element={<ProtectedRoute />}>
                <Route index element={<NewDealPage />} />
              </Route>

              <Route path="/dashboard/:dealId" element={<ProtectedRoute />}>
                <Route index element={<Dashboard />} />
              </Route>

              <Route path="/profile" element={<Profile />} />
              <Route path="/pricing" element={<PaymentOption />} />
              <Route path="/billing" element={<Billing />} />

              <Route path="/successful-payment" element={<PaymentSuccessPage />} />
              <Route path="/cancel-payment" element={<PaymentCancellation />}/>
                
              {/* Route for larger screen redirection */}
              <Route path="/move-to-larger-screen" element={<MoveToLargeScreen />} />
            </Routes>
          </AuthProvider>
        </Suspense>
      </Router>
    </>
  );
}

export default App;

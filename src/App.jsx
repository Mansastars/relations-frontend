import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loader from './components/ReusableComponents/Loader';
import { AuthProvider } from './hooks/AuthContext';
import ProtectedRoute from './hooks/ProtectedRoute';

// Lazy loading implementation
const SignUp = lazy(() => import("./components/AuthPages/SignUp"));
const Login = lazy(() => import("./components/AuthPages/Login"));
const Dashboard = lazy(() => import("../src/components/Pages/Dashboard"));
const Profile = lazy(() => import("./components/Pages/Profile"));
const NewDealPage = lazy(() => import("../src/components/Pages/NewDeal"));
const MoveToLargeScreen = lazy(() => import("./components/Pages/MoveToLargeScreen"));
const PaymentOption = lazy(() => import("./components/Pages/PaymentOption"));
const PaymentSuccessPage = lazy(() => import("./components/Stripe/PaymentSuccessPage"));
const PaymentCancellation = lazy(() => import("./components/Stripe/PaymentCancellation"));
const VerifyEmail = lazy(() => import("./components/AuthPages/VerifyEmail"));
const ForgotPassword = lazy(() => import("./components/AuthPages/ForgotPassword"));
const Verify = lazy(() => import("./components/AuthPages/Verify"));
const Contacts = lazy(() => import("./components/Pages/Contacts"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loader />}>
          <AuthProvider>
            <Routes>
              <Route path="/auth/sign_up" element={<SignUp />} />
              <Route path="/auth/login" element={<Login />} />
              <Route path="/verify_email" element={<VerifyEmail />} />
              <Route path="/reset-password/:verificationToken" element={<ForgotPassword />} />
              <Route path="/verify/:verificationToken" element={<Verify />} />

              {/* Use ProtectedRoute as a Route component */}
              <Route path="/alldashboards" element={<ProtectedRoute />}>
                <Route index element={<NewDealPage />} />
              </Route>

              <Route path="/dashboard/:dealId" element={<ProtectedRoute />}>
                <Route index element={<Dashboard />} />
              </Route>

              <Route path="/contact" element={<ProtectedRoute />}>
                <Route index element={<Contacts />} />
              </Route>

              <Route path="/profile" element={<Profile />} />
              <Route path="/pricing" element={<PaymentOption />} />

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

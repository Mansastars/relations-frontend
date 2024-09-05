import { lazy, Suspense, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Navigate,
} from "react-router-dom";
import Loader from "./components/ReusableComponents/Loader";
import { AuthProvider } from "./hooks/AuthContext";
import ProtectedRoute from "./hooks/ProtectedRoute";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend'
import Waitlist from "./Pages/Waitlist";

// Lazy loading implementation
const Dashboard = lazy(() => import("./Pages/Dashboard"));
const Profile = lazy(() => import("./Pages/Profile"));
const NewDealPage = lazy(() => import("./Pages/NewDeal"));
const MoveToLargeScreen = lazy(() => import("./Pages/MoveToLargeScreen"));
const PaymentOption = lazy(() => import("./Pages/PaymentOption"));
const PaymentSuccessPage = lazy(() =>
  import("./components/Stripe/PaymentSuccessPage")
);
const PaymentCancellation = lazy(() =>
  import("./components/Stripe/PaymentCancellation")
);
const VerifyEmail = lazy(() => import("./AuthPages/VerifyEmail"));
const ForgotPassword = lazy(() => import("./AuthPages/ForgotPassword"));
const Verify = lazy(() => import("./AuthPages/Verify"));
const Contacts = lazy(() => import("./Pages/Contacts"));
const SidePanel = lazy(() => import("./Pages/SidePanel"));
const ContactUs = lazy(() => import("./components/ContactUs/ContactUs"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const InvestorsUpdate = lazy(() => import("./Pages/InvestorsUpdate"));
const NewSignUpPage = lazy(() => import("./AuthPages/NewSignUpPage"));
const NewLogin = lazy(() => import("./AuthPages/NewLogin"));

function App() {
  const [showContactUs, setShowContactUs] = useState(false);
  const location = useLocation();

  // List of routes where the SidePanel should not be shown
  const hideSidePanelRoutes = [
    "/",
    "/auth/sign_up",
    "/auth/login",
    "/verify_email",
    "/cancel-payment",
    "/successful-payment",
    "/not-found",
    "/wait-list"
  ];

  const hideSidePanelPatterns = [/^\/reset-password\/.*$/, /^\/verify\/.*$/];

  // Check if the current path matches any of the exact paths in hideSidePanelRoutes
  const shouldHideSidePanel =
    hideSidePanelRoutes.includes(location.pathname) ||
    hideSidePanelPatterns.some((pattern) => pattern.test(location.pathname));

  return (
    <DndProvider backend={HTML5Backend}>
    <AuthProvider>
      <div className="flex h-screen w-full">
        {!shouldHideSidePanel && (
          <div className="w-fit h-screen">
            <SidePanel setShowContactUs={setShowContactUs} />
          </div>
        )}
        <Suspense fallback={<Loader />}>
          <div className=" w-full overflow-y-auto h-screen">
            <Routes>
              <Route path="/auth/login" element={<NewLogin />} />
              <Route path="/auth/sign_up" element={<NewSignUpPage />} />
              <Route path="/wait-list" element={<Waitlist />} />
              <Route path="/verify_email" element={<VerifyEmail />} />
              <Route
                path="/reset-password/:verificationToken"
                element={<ForgotPassword />}
              />
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

              <Route path="/investors-update" element={<ProtectedRoute />}>
                <Route index element={<InvestorsUpdate />} />
              </Route>

              <Route path="/profile" element={<Profile />} />
              <Route path="/pricing" element={<PaymentOption />} />

              <Route
                path="/successful-payment"
                element={<PaymentSuccessPage />}
              />
              <Route path="/cancel-payment" element={<PaymentCancellation />} />

              {/* Route for larger screen redirection */}
              <Route
                path="/move-to-larger-screen"
                element={<MoveToLargeScreen />}
              />

              <Route path="*" element={<Navigate to="/not-found" />} />
              <Route path="/not-found" element={<NotFound />} />
            </Routes>
          </div>
          {showContactUs && (
            <ContactUs onClose={() => setShowContactUs(false)} />
          )}
        </Suspense>
        <ToastContainer />
      </div>
    </AuthProvider>
    </DndProvider>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;

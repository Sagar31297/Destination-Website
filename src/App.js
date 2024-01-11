import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Team from "./Team";
import Error from "./Error";
import Signup from "./Signup";
import Login from "./Login";
import ScrollButton from "./ScrollButton";
import Loading from "./Loading";
import ForgotPassword from "./ForgotPassword";
import FlightBookingPage from "./FlightBookingPage";
import MobileLogin from "./MobileLogin";
import OTPVerification from "./OTPVerification";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Theme";

const App = () => {
  const [loading, setLoading] = useState(true);

  const Loader = () => {
    return <h3 style={{ textAlign: "center", marginTop: "100px" }}>Please wait, Loading ...</h3>;
  };

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };

  const handleRouteChange = () => {
    // Define your route change logic here
    console.log("Route changed!");
  };

  useEffect(() => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar startLoading={startLoading} handleRouteChange={handleRouteChange} />
        {loading ? (
          <Loader />
        ) : (
          <>
            <ScrollButton />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about/team" element={<Team />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/error" element={<Error />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/forgot" element={<ForgotPassword />} />
              <Route path="/flightbooking" element={<FlightBookingPage />} />
              <Route path="*" element={<Error />} />
              <Route path="/mobileLogin" element={<MobileLogin />} />
              <Route path="/otpVerification" element={<OTPVerification />} />
            </Routes>
          </>
        )}
        <Newsletter />
        <Footer />
      </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;

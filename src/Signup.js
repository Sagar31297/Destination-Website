import React, { useState } from "react";
import Header from "./Header";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import Box from "@mui/material/Box";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider, signInWithPopup } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { Toaster, toast } from "react-hot-toast";
import { auth } from "./FirebaseConfig";


// const firebaseConfig = {
//   apiKey: "AIzaSyCGnGff_QzougpjMeFn0QcyC1QMEMAPaJc",
//   authDomain: "booking-website-b3b4b.firebaseapp.com",
//   projectId: "booking-website-b3b4b",
//   storageBucket: "booking-website-b3b4b.appspot.com",
//   messagingSenderId: "146141154444",
//   appId: "1:146141154444:web:ffc21511741f495a4effa9",
// };

// const app = initializeApp(firebaseConfig);
const Signup = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    username: "",
    password: "",
  });

  const handleGoogleSignup = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      toast.success("User registered with Google successfully!", {
        duration: 2000,
        position: "top-center",

        // Styling
        style: {},
        className: "",
      });
    } catch (error) {
      toast.error("Error registering with Google: " + error.message, {
        duration: 2000,
        position: "top-center",

        // Styling
        style: {},
        className: "",
      });
    }
  };

  const handleFacebookSignup = async () => {
    const auth = getAuth();
    const provider = new FacebookAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      toast.success("User registered with Facebook successfully!", {
        duration: 2000,
        position: "top-center",

        // Styling
        style: {},
        className: "",
      });
    } catch (error) {
      toast.error("Error registering with Facebook: " + error.message, {
        duration: 2000,
        position: "top-center",

        // Styling
        style: {},
        className: "",
      });
    }
  };

  const handleTwitterSignup = async () => {
    const auth = getAuth();
    const provider = new TwitterAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      toast.success("User registered with Twitter successfully!", {
        duration: 2000,
        position: "top-center",

        // Styling
        style: {},
        className: "",
      });
    } catch (error) {
      toast.error("Error registering with Twitter: " + error.message, {
        duration: 2000,
        position: "top-center",

        // Styling
        style: {},
        className: "",
      });
    }
  };


  const handleSignup = async (e) => {
    e.preventDefault();

    if (!user.firstName || !user.lastName || !user.email || !user.mobileNumber || !user.username || !user.password) {
      toast.error("Please fill all the details", {
        duration: 2000,
        position: "top-center",

        // Styling
        style: {},
        className: "",
      });
    }
    else {
      try {
        const { firstName, lastName, email, mobileNumber, username, password } = user;
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success("User registered successfully!", {
          duration: 2000,
          position: "top-center",

          // Styling
          style: {},
          className: "",
        });

      } catch (error) {
        toast.error("Error registering user: " + error.message, {
          duration: 1000,
          position: "top-center",

          // Styling
          style: {},
          className: "",
        });
      }

      setUser({
        firstName: "",
        lastName: "",
        email: "",
        mobileNumber: "",
        username: "",
        password: "",
      })
    }

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <Header />
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={8}>
          <form method="POST">
            <Card
              sx={{
                background: "#f3f6fd",
                color: "black",
                borderRadius: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 2,
                width: "100%",
                marginTop: "100px",
                marginBottom: "15px",
              }}
            >
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  color: "#818090",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                Register account
              </Typography>
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  color: "black",
                  textAlign: "center",
                  position: "relative",
                  margin: "10px",
                  fontSize: {
                    xs: "25px",
                    sm: "25px",
                    md: "30px",
                    lg: "30px",
                  },
                }}
              >
                Register your account
              </Typography>
              <Grid container justifyContent="center">
                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    required
                    label="Enter first name"
                    variant="outlined"
                    type="text"
                    onChange={handleChange}
                    name="firstName"
                    value={user.firstName}
                    color="secondary"
                    sx={{
                      width: "70%",
                      mt: { xs: 3, sm: 2, md: 2 },
                      mb: { sm: 2, md: 2 },
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    required
                    label="Enter last name"
                    variant="outlined"
                    type="text"
                    onChange={handleChange}
                    name="lastName"
                    value={user.lastName}
                    color="secondary"
                    sx={{
                      width: "70%",
                      mt: { xs: 3, sm: 2, md: 1 },
                      mb: { sm: 2, md: 2 },
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    label="Email address"
                    variant="outlined"
                    type="email"
                    onChange={handleChange}
                    name="email"
                    value={user.email}
                    color="secondary"
                    sx={{
                      width: "70%",
                      mt: { xs: 3, sm: 2, md: 1 },
                      mb: { sm: 2, md: 2 },
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    required
                    label="Mobile Number"
                    variant="outlined"
                    type="text"
                    onChange={handleChange}
                    name="mobileNumber"
                    value={user.mobileNumber}
                    color="secondary"
                    sx={{
                      width: "70%",
                      mt: { xs: 3, sm: 2, md: 1 },
                      mb: { sm: 2, md: 2 },
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    required
                    label="User name"
                    variant="outlined"
                    type="text"
                    onChange={handleChange}
                    name="username"
                    value={user.username}
                    color="secondary"
                    sx={{
                      width: "70%",
                      mt: { xs: 3, sm: 2, md: 1 },
                      mb: { sm: 2, md: 2 },
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    required
                    label="Password"
                    type="password"
                    variant="outlined"
                    onChange={handleChange}
                    name="password"
                    value={user.password}
                    color="secondary"
                    sx={{
                      width: "70%",
                      mt: { xs: 3, sm: 2, md: 1 },
                      mb: { sm: 2, md: 2 },
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    onClick={handleSignup}
                    sx={{
                      paddingRight: "30px",
                      mt: 3,
                      mb: 3,
                      justifyContent: "center",
                      textTransform: "capitalize",
                      fontSize: "18px",
                      ":hover": {
                        backgroundColor: "#212529",
                      },
                    }}
                  >
                    Register
                  </Button>
                  <Toaster />
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Box
                    sx={{
                      display: { xs: "none", md: "block", lg: "block" },
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "200px",
                        height: "1px",
                        background: "#dddddd",
                        left: "calc(30% - 90px)",
                        top: "22px",
                      },
                    }}
                  />

                  <Typography
                    variant="p"
                    component="p"
                    sx={{
                      color: "#818090",
                      textAlign: "center",
                      position: "relative",
                      margin: "10px",
                    }}
                  >
                    or
                  </Typography>
                  <Box
                    sx={{
                      display: { xs: "none", md: "block", lg: "block" },
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        width: "200px",
                        height: "1px",
                        background: "#dddddd",
                        right: "calc(30% - 90px)",
                        bottom: "21px",
                      },
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "5px",
                    }}
                  >
                    <Button onClick={handleGoogleSignup}>
                      <GoogleIcon
                        className="icons_style"
                        style={{ fontSize: "30px" }}
                      />
                    </Button>
                    <Button onClick={handleFacebookSignup}>
                      <FacebookIcon
                        className="icons_style"
                        style={{ fontSize: "30px" }}
                      />
                    </Button>
                    <Button onClick={handleTwitterSignup}>
                      <TwitterIcon
                        className="icons_style"
                        style={{ fontSize: "30px" }}
                      />
                    </Button>
                  </div>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Typography
                    variant="p"
                    component="p"
                    sx={{
                      color: "#818090",
                      textAlign: "center",
                      position: "relative",
                      margin: "10px",
                    }}
                  >
                    Already have an account?
                    <Link
                      to="/login"
                      style={{
                        color: "#8b3eea",
                        textDecoration: "none",
                      }}
                    >
                      Log in Now
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </form>
        </Grid>
        {/* <Grid item xs={12}>
          <Newsletter />
          <Footer />
        </Grid> */}
      </Grid>
    </>
  );
};

export default Signup;

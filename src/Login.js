import React, { useState } from "react";
import Header from "./Header";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Toaster, toast } from "react-hot-toast";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate(); 

  const InputEvent = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const SubmitDetails = async (event) => {
    event.preventDefault();

    if (!user.email || !user.password) {
      toast.error("Please fill in both email and password fields.",{
        duration: 2000,
        position: "top-center",

        // Styling
        style: {},
        className: "",
      });
      return;
    }
    else{
      try {
        const auth = getAuth();
        const { email, password } = user;
        await signInWithEmailAndPassword(auth, email, password);
        toast.success("Login successful",{
          duration: 2000,
          position: "top-center",
  
          // Styling
          style: {},
          className: "",
        });
        navigate("/"); 
      } catch (error) {
        toast.error("Login failed: " +   "Please create your account",{
          duration: 2000,
          position: "top-center",
  
          // Styling
          style: {},
          className: "",
        });
      }
      setUser({
        email: "",
      password: "",
      })
    }
   
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
                Login your account
              </Typography>
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  color: "black",
                  textAlign: "center",
                  position: "relative",
                  margin: "10px",
                  fontSize: { xs: "25px", sm: "25px", md: "30px", lg: "30px" },
                }}
              >
                Logged in to stay in touch
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
                    label="Enter email"
                    variant="outlined"
                    name="email"
                    type="email"
                    value={user.email}
                    onChange={InputEvent}
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
                    id="outlined-password-input"
                    label="Enter password"
                    variant="outlined"
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={InputEvent}
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
                  xs={9}
                  sm={9}
                  md={9}
                  lg={9}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Link
                    to="/forgot"
                    style={{
                      paddingBottom: "15px",
                      mb: 3,
                      color: "#818090",
                      textDecoration: "none",
                      ":hover": {
                        color: "#8b3eea",
                      },
                    }}
                  >
                    Forgot password?
                  </Link>
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
                    onClick={SubmitDetails}
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
                    Log in
                  </Button>
                  <Toaster />
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
                    Don't have an account?
                    <Link
                      to="/register"
                      style={{
                        color: "#8b3eea",
                        textDecoration: "none",
                      }}
                    >
                      Register Now
                    </Link>
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Button variant="contained" size="large"
                    color="secondary"><Link
                    to="/mobileLogin"
                    style={{
                      
                      fontSize: "18px",
                      paddingRight: "15px",
                      mt: 3,
                      mb: 3,
                      textTransform: "capitalize",
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Login with Mobile Number
                  </Link></Button>
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

export default Login;

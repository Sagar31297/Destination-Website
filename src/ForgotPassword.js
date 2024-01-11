import React, { useState } from "react";
import Header from "./Header";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import { sendPasswordResetEmail } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { Toaster, toast } from "react-hot-toast";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendCode = async (e) => {
    e.preventDefault();

    if(!email){
      toast.error("Please fill the email address",{
        duration: 2000,
        position: "top-center",

        // Styling
        style: {},
        className: "",
      });
    }

    else{
      try {
        const auth = getAuth();
        await sendPasswordResetEmail(auth, email);
        toast.success("Password reset email sent. Check your inbox.",{
          duration: 2000,
          position: "top-center",
  
          // Styling
          style: {},
          className: "",
        });
      } catch (error) {
        toast.error(`Password reset failed: ${error.message}`,{
          duration: 2000,
          position: "top-center",
  
          // Styling
          style: {},
          className: "",
        });
      }
      setEmail("");
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
                Forgot password
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
                Reset your password
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
                    label="Enter your email"
                    variant="outlined"
                    color="secondary"
                    value={email}
                    onChange={handleEmailChange}
                    sx={{
                      width: "70%",
                      mt: { xs: 3, sm: 2, md: 2 },
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
                    onClick={handleSendCode}
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
                    Send mail
                  </Button>
                  <Toaster />
                </Grid>
              </Grid>
              {message && (
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
                  {message}
                </Typography>
              )}
            </Card>
          </form>
          {/* <Grid item xs={12}>
          <Newsletter />
          <Footer />
        </Grid> */}
        </Grid>
      </Grid>
    </>
  );
};

export default ForgotPassword;

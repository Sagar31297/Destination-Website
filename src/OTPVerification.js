// OTPVerification.jsx

import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { auth } from "./FirebaseConfig";
import Header from "./Header";
import { PhoneAuthProvider } from "firebase/auth";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const OTPVerification = () => {
  const [otp, setOtp] = useState("");
  

  const handleVerifyOTP = async () => {
    const verificationId = "verificationId"; 
    const credential = PhoneAuthProvider.credential(verificationId, otp);

    try {
      await auth.signInWithCredential(credential);
      alert("Mobile number verified successfully");
      alert("Login successful!");
    } catch (error) {
      alert("Error verifying OTP:", error);
    }
  };

  const renderInput = (input, index) => (
    <input
      // key={index}
      // value={input}
      // onChange={() => {}}
      // onFocus={() => {}}
      // onBlur={() => {}}
      style={{
        width: "50px",
        height: "50px",
        margin: "5px",
        fontSize: "16px",
        textAlign: "center",
      }}
    />
  );

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
                  color: "black",
                  textAlign: "center",
                  position: "relative",
                  margin: "10px",
                  fontSize: { xs: "25px", sm: "25px", md: "30px", lg: "30px" },
                }}
              >
                Please enter the OTP sent to your mobile number
              </Typography>
              <Grid container justifyContent="center">
                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderInput={renderInput}
                    separator={
                      <span style={{ marginLeft: "5px", marginRight: "5px" }}>
                        -
                      </span>
                    }
                    inputStyle={{
                      width: "50px",
                      height: "50px",
                    }}
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={6}
                  lg={6}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    onClick={handleVerifyOTP}
                    sx={{
                      ":hover": {
                        backgroundColor: "#212529",
                      },
                    }}
                  >
                    <Link
                      to="/"
                      style={{
                        fontSize: "18px",
                        paddingRight: "15px",
                        textTransform: "capitalize",
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      Verify OTP
                    </Link>
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </form>
        </Grid>
        <Grid item xs={12}>
        <Newsletter />
        <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default OTPVerification;

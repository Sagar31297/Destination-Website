import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { signInWithPhoneNumber, PhoneAuthProvider } from "firebase/auth";
import { auth } from "./FirebaseConfig";
import Header from "./Header";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

const MobileLogin = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [showOTP, setShowOTP] = useState(false);

  const handleRequestOTP = async () => {
    try {
      const confirmationResult = await signInWithPhoneNumber(
        auth,
        `+${phone}`
      );

      console.log(
        "OTP request successful. Verification ID:",
        confirmationResult.verificationId
      );
      setVerificationId(confirmationResult.verificationId);
      setShowOTP(true);
    } catch (error) {
      console.error("Error requesting OTP:", error);
    }
  };

  const handleVerifyOTP = async () => {
    const credential = PhoneAuthProvider.credential(
      verificationId,
      otp
    );

    try {
      await auth.signInWithCredential(credential);
      console.log("Mobile number verified successfully");
      alert("Login successful!");
    } catch (error) {
      console.error("Error verifying OTP:", error);
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
                  color: "black",
                  textAlign: "center",
                  position: "relative",
                  margin: "10px",
                  fontSize: { xs: "20px", sm: "20px", md: "30px", lg: "30px" },
                }}
              >
                Login with your mobile number
              </Typography>
              <Grid container justifyContent="center">
                <Grid
                  item
                  xs={12}
                  sm={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <PhoneInput
                      country={"in"}
                      value={phone}
                      onChange={(phone) => setPhone(phone)}
                      containerStyle={{
                        width: "300px",
                        height: "50px",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                      }}
                      inputStyle={{
                        width: "100%",
                        height: "100%",
                        fontSize: "16px",
                      }}
                      buttonStyle={{
                        height: "100%",
                        borderRadius: "0 8px 8px 0",
                        border: "1px solid #ccc",
                      }}
                    />
                  </div>
                </Grid>
                {showOTP ? (
                  <>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "20px",
                      }}
                    >
                      <OtpInput
                        value={otp}
                        onChange={setOtp}
                        numInputs={4}
                        separator={
                          <span
                            style={{ marginLeft: "5px", marginRight: "5px" }}
                          >
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
                        Verify OTP
                      </Button>
                    </Grid>
                  </>
                ) : (
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
                      onClick={handleRequestOTP}
                      sx={{
                        ":hover": {
                          backgroundColor: "#212529",
                        },
                      }}
                    >
                      Request OTP
                    </Button>
                  </Grid>
                )}
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
                <Button variant="contained" size="large" color="secondary">
                  <Link
                    to="/login"
                    style={{
                      fontSize: "18px",
                      paddingRight: "15px",
                      textTransform: "capitalize",
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Login with Email
                  </Link>
                </Button>
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

export default MobileLogin;

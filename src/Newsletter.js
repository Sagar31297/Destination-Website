import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import EmailIcon from "@mui/icons-material/Email";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const InputEvent = (event) => {
    setEmail(event.target.value);
  };
  const SubmitData = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please fill the email", {
        duration: 2000,
        position: "top-center",

        // Styling
        style: {},
        className: "",
      });
    } else {
      toast.success("Thank you for subscribing us",{
        duration: 2000,
        position: "top-center",

        // Styling
        style: {},
        className: "",
      });
    }
    setEmail("");
  };
  return (
    <>
      <Box
        sx={{
          paddingTop: "80px",
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2} style={{ backgroundColor: "#f3f6fd" }}>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                p: { xs: 1, sm: 2, md: 3 },
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: { xs: "column", sm: "column", md: "row" },
                textAlign: "center",
              }}
            >
              <EmailIcon
                color="secondary"
                sx={{
                  fontSize: { xs: "120px", sm: "90px", md: "100px" },
                }}
              />
              <div style={{ marginTop: "20px" }}>
                <Typography variant="h5" sx={{ textAlign: "justify" }}>
                  Get the latest news and offers
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    fontSize: "28px",
                    textAlign: "justify",
                  }}
                >
                  Subscribe to our newsletter
                </Typography>
              </div>
            </Box>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              sx={{
                marginTop: "20px",
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextField
                label="Enter your mail address"
                type="email"
                name="email"
                value={email}
                variant="outlined"
                onChange={InputEvent}
                color="secondary"
                sx={{
                  width: { xs: "70%", sm: "50%", md: "70%", lg: "80%" },
                }}
              />
              <Button
                variant="contained"
                size="large"
                color="secondary"
                onClick={SubmitData}
                sx={{
                  padding: "15px 30px",
                  ":hover": {
                    backgroundColor: "#212529",
                  },
                }}
              >
                Subscribe
              </Button>
              <Toaster position="top-center" reverseOrder={false} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Newsletter;

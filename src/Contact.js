import React, { useState } from "react";
import Header from "./Header";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import { Toaster, toast } from "react-hot-toast";

const Contact = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    message: "",
  });

  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (event) => {
    event.preventDefault();
    const { fname, lname, email, mobile, message } = user;

    if (fname && lname && email && mobile && message) {
      const res = await fetch(
        "https://booking-website-b3b4b-default-rtdb.firebaseio.com/userData.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fname,
            lname,
            email,
            mobile,
            message,
          }),
        }
      );

      if (res) {
        setUser({
          fname: "",
          lname: "",
          email: "",
          mobile: "",
          message: "",
        });
        toast.success("Data stored successfully",{
          duration: 2000,
          position: "top-center",
  
          // Styling
          style: {},
          className: "",
        });
        return;
      }
    } else {
      toast.error("Please fill in all the details");
    }
  };
  return (
    <>
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={12}>
            <Box sx={{ p: 5, mt: 2 }}>
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  fontWeight: 700,
                  textAlign: "center",
                  position: "relative",
                  fontSize: {
                    xs: "30px",
                    sm: "30px",
                    md: "30px",
                    lg: "30px",
                  },

                }}
              >
                Contact with us
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "200px",
                    height: "1px",
                    background: "#8b3eea",
                    left: "calc(50% - 100px)",
                    top: "20px",
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                p: 5,
                mt: 5,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  fontWeight: 700,
                  textAlign: "left",
                  fontSize: {
                    xs: "23px",
                    sm: "23px",
                    md: "30px",
                    lg: "30px",
                  },
                }}
              >
                Stay in Touch
              </Typography>

              <Typography
                variant="h4"
                component="h4"
                color="secondary"
                sx={{
                  fontWeight: 500,
                  textAlign: "right",
                  fontSize: {
                    xs: "23px",
                    sm: "23px",
                    md: "30px",
                    lg: "30px",
                  },
                }}
              >
                +00 123 456 789
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{ p: 2 }}>
            <Card
              variant="outlined"
              sx={{ boxShadow: 3, borderRadius: 4, width: "100%" }}
            >
              <CardMedia component="div">
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <div>
                    <Typography
                      variant="h6"
                      style={{ textAlign: "center", fontSize: "18px" }}
                    >
                      Head Office
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{ textAlign: "center", fontWeight: 700 }}
                    >
                      New Mexico
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{
                        textAlign: "center",
                        color: "#81809e",
                        fontSize: "15px",
                      }}
                    >
                      4140 Parker Rd. Allentown, New Mexico
                      <br />
                      31134
                    </Typography>
                  </div>
                  <div>
                    <NavLink to="https://www.google.com/maps/place/And+IT/@22.813717,89.5632226,17z/data=!3m1!4b1!4m6!3m5!1s0x39ff901efac79b59:0x5be01a1bc0dc7eba!8m2!3d22.8137121!4d89.5657975!16s%2Fg%2F11g9jy8dg_?entry=ttu">
                      <Button
                        color="secondary"
                        style={{ fontWeight: "bold", padding: "30px" }}
                      >
                        View on map
                      </Button>
                    </NavLink>
                  </div>
                </CardContent>
              </CardMedia>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{ p: 2 }}>
            <Card
              variant="outlined"
              sx={{ boxShadow: 3, borderRadius: 4, width: "100%" }}
            >
              <CardMedia component="div">
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <div>
                    <Typography
                      variant="h6"
                      style={{ textAlign: "center", fontSize: "18px" }}
                    >
                      Washington office
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{ textAlign: "center", fontWeight: 700 }}
                    >
                      Washington
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{
                        textAlign: "center",
                        color: "#81809e",
                        fontSize: "15px",
                      }}
                    >
                      4517 Washington Ave. Manchester, Kentucky
                      <br />
                      39495
                    </Typography>
                  </div>
                  <div>
                    <NavLink to="https://www.google.com/maps/place/And+IT/@22.813717,89.5632226,17z/data=!3m1!4b1!4m6!3m5!1s0x39ff901efac79b59:0x5be01a1bc0dc7eba!8m2!3d22.8137121!4d89.5657975!16s%2Fg%2F11g9jy8dg_?entry=ttu">
                      <Button
                        color="secondary"
                        style={{ fontWeight: "bold", padding: "30px" }}
                      >
                        View on map
                      </Button>
                    </NavLink>
                  </div>
                </CardContent>
              </CardMedia>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{ p: 2 }}>
            <Card
              variant="outlined"
              sx={{ boxShadow: 3, borderRadius: 4, width: "100%" }}
            >
              <CardMedia component="div">
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <div>
                    <Typography
                      variant="h6"
                      style={{ textAlign: "center", fontSize: "18px" }}
                    >
                      California office
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{ textAlign: "center", fontWeight: 700 }}
                    >
                      California
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{
                        textAlign: "center",
                        color: "#81809e",
                        fontSize: "15px",
                      }}
                    >
                      3891 Ranchview Dr. Richardson, California
                      <br />
                      62639
                    </Typography>
                  </div>
                  <div>
                    <NavLink to="https://www.google.com/maps/place/And+IT/@22.813717,89.5632226,17z/data=!3m1!4b1!4m6!3m5!1s0x39ff901efac79b59:0x5be01a1bc0dc7eba!8m2!3d22.8137121!4d89.5657975!16s%2Fg%2F11g9jy8dg_?entry=ttu">
                      <Button
                        color="secondary"
                        style={{ fontWeight: "bold", padding: "30px" }}
                      >
                        View on map
                      </Button>
                    </NavLink>
                  </div>
                </CardContent>
              </CardMedia>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3} sx={{ p: 2 }}>
            <Card
              variant="outlined"
              sx={{ boxShadow: 3, borderRadius: 4, width: "100%" }}
            >
              <CardMedia component="div">
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <div>
                    <Typography
                      variant="h6"
                      style={{ textAlign: "center", fontSize: "18px" }}
                    >
                      Office schedule
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{ textAlign: "center", fontWeight: 700 }}
                    >
                      Working hours
                    </Typography>
                    <Typography
                      variant="h6"
                      style={{
                        textAlign: "center",
                        color: "#81809e",
                        fontSize: "15px",
                      }}
                    >
                      Monday to Friday
                      <br />9 am to 10pm
                    </Typography>
                  </div>
                  <div>
                    <NavLink to="https://www.google.com/maps/place/And+IT/@22.813717,89.5632226,17z/data=!3m1!4b1!4m6!3m5!1s0x39ff901efac79b59:0x5be01a1bc0dc7eba!8m2!3d22.8137121!4d89.5657975!16s%2Fg%2F11g9jy8dg_?entry=ttu">
                      <Button
                        color="secondary"
                        style={{ fontWeight: "bold", padding: "30px" }}
                      >
                        View on map
                      </Button>
                    </NavLink>
                  </div>
                </CardContent>
              </CardMedia>
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ p: 5, mt: 5 }}>
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  fontWeight: 700,
                  textAlign: "center",
                  position: "relative",
                  fontSize: {
                    xs: "30px",
                    sm: "30px",
                    md: "30px",
                    lg: "30px",
                  },
                }}
              >
                Leave us a message
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    width: "200px",
                    height: "1px",
                    background: "#8b3eea",
                    left: "calc(50% - 100px)",
                    top: "20px",
                  },
                }}
              />
            </Box>
          </Grid>

          <Grid container justifyContent="center">
            <Grid item xs={12} sm={10} md={8}>
              <form method="POST">
                <Card
                  sx={{
                    boxShadow: 3,
                    borderRadius: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 2,
                    width: "100%",
                    marginTop: "15px",
                    marginBottom: "15px",
                  }}
                >
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        label="First Name"
                        variant="outlined"
                        color="secondary"
                        name="fname"
                        value={user.fname}
                        onChange={getUserData}
                        fullWidth
                        sx={{
                          mt: { xs: 3, sm: 2, md: 2 },
                          mb: { sm: 2, md: 2 },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        label="Last Name"
                        variant="outlined"
                        color="secondary"
                        name="lname"
                        value={user.lname}
                        onChange={getUserData}
                        fullWidth
                        sx={{
                          mt: { sm: 2, md: 2 },
                          mb: { xs: 3, sm: 2, md: 2 },
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Email address (Optional)"
                        variant="outlined"
                        color="secondary"
                        name="email"
                        value={user.email}
                        onChange={getUserData}
                        fullWidth
                        sx={{
                          mt: { sm: 2, md: 2 },
                          mb: { sm: 2, md: 2 },
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        label="Mobile Number"
                        variant="outlined"
                        color="secondary"
                        name="mobile"
                        value={user.mobile}
                        onChange={getUserData}
                        fullWidth
                        sx={{
                          mt: { xs: 0, sm: 2, md: 2 },
                          mb: { xs: 1, sm: 2, md: 2 },
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid item xs={12}>
                      <TextField
                        label="Message"
                        variant="outlined"
                        color="secondary"
                        name="message"
                        value={user.message}
                        onChange={getUserData}
                        fullWidth
                        sx={{ mt: 2, mb: 2 }}
                      />
                    </Grid>
                  </Grid>
                  <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    className="left-aligned-button"
                    onClick={postData}
                    sx={{
                      padding: "15px",
                      mt: 3,
                      mb: 3,
                      ":hover": {
                        backgroundColor: "#212529",
                      },
                    }}
                  >
                    Send message
                  </Button>
                  <Toaster />
                </Card>
              </form>
            </Grid>
          </Grid>
          {/* <Grid item xs={12}>
            <Newsletter />
            <Footer />
          </Grid> */}
        </Grid>
      </Box>
    </>
  );
};

export default Contact;

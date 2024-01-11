import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import PaymentsIcon from "@mui/icons-material/Payments";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SettingsIcon from "@mui/icons-material/Settings";
import NumberCounter from "number-counter";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import HouseIcon from "@mui/icons-material/House";
import PublicIcon from "@mui/icons-material/Public";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import Header from "./Header";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
// import { Translate } from "@mui/icons-material";
//import Button from '@mui/material/Button';

const About = () => {
  return (
    <>
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3 }}>
              <Typography variant="h5" component="h5">
                About Us
              </Typography>
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  fontWeight: "bold",
                  mt: 2,
                  fontSize: {
                    xs: "28px",
                    sm: "28px",
                    md: "30px",
                    lg: "30px",
                  },
                }}
              >
                We Are The World's Best Travel Agency Company Since 2000
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr.
                <br />
                At vero eos et accusam et justo duo dolores et ea rebum. Stet
                clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr.
              </Typography>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                sx={{
                  mt: 2,
                  ":hover": {
                    backgroundColor: "#212529",
                  },
                }}
              >
                Find Tours
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src="images/image1.png"
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 4, px: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4}>
              <img
                src="images/image2.png"
                alt=""
                style={{ width: "100%", height: "400px" }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <Box sx={{ position: "relative" }}>
                <img
                  src="images/image3.png"
                  alt=""
                  style={{ width: "100%", height: "400px" }}
                />
                <Box
                  sx={{
                    bottom: "50px",
                    left: "100px",
                    color: "white",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      mb: 1,
                      position: "absolute",
                      top: { xs: "20%", sm: "20%", md: "40%", lg: "40%" },
                      left: { xs: "15%", sm: "15%", md: "30%", lg: "30%" },
                    }}
                  >
                    Enjoy 20% discount
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      mb: 1,
                      position: "absolute",
                      top: { xs: "30%", sm: "30%", md: "50%", lg: "50%" },
                      left: { xs: "15%", sm: "15%", md: "30%", lg: "30%" },
                    }}
                  >
                    Thailand couple tour
                  </Typography>
                  <Button
                    sx={{
                      color: "white",
                      textDecoration: "underline",
                      position: "absolute",
                      fontSize: "18px",
                      top: { xs: "55%", sm: "55%", md: "60%", lg: "60%" },
                      left: { xs: "20%", sm: "20%", md: "40%", lg: "40%" },
                    }}
                  >
                    Find Tours
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 5, px: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Card variant="outlined" sx={{ boxShadow: 3, borderRadius: 4 }}>
                <CardMedia component="div">
                  <TravelExploreIcon sx={{ fontSize: 50 }} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" style={{ color: "#8b3eea" }}>
                    Best services
                  </Typography>
                  <Typography variant="body1">
                    Phaseus site amet tristique ligua donec iaculis leo sus
                    cipit. Consec tetur adipiscing elit. Incididunt ut dolore.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card variant="outlined" sx={{ boxShadow: 3, borderRadius: 4 }}>
                <CardMedia component="div">
                  <PaymentsIcon sx={{ fontSize: 50 }} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" style={{ color: "#8b3eea" }}>
                    Trusted payment
                  </Typography>
                  <Typography variant="body1">
                    Phaseus site amet tristique ligua donec iaculis leo sus
                    cipit. Consec tetur adipiscing elit. Incididunt ut dolore.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card variant="outlined" sx={{ boxShadow: 3, borderRadius: 4 }}>
                <CardMedia component="div">
                  <StarBorderIcon sx={{ fontSize: 50 }} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" style={{ color: "#8b3eea" }}>
                    Top facility
                  </Typography>
                  <Typography variant="body1">
                    Phaseus site amet tristique ligua donec iaculis leo sus
                    cipit. Consec tetur adipiscing elit. Incididunt ut dolore.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card variant="outlined" sx={{ boxShadow: 3, borderRadius: 4 }}>
                <CardMedia component="div">
                  <SettingsIcon sx={{ fontSize: 50 }} />
                </CardMedia>
                <CardContent>
                  <Typography variant="h6" style={{ color: "#8b3eea" }}>
                    Awesome deals
                  </Typography>
                  <Typography variant="body1">
                    Phaseus site amet tristique ligua donec iaculis leo sus
                    cipit. Consec tetur adipiscing elit. Incididunt ut dolore.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <div className="banner-container">
          <Box sx={{ mt: 5 }}>
            <Grid item>
              <Box sx={{ position: "relative" }}>
                <img
                  src="images/image57.png"
                  alt=""
                  style={{ width: "100%", height: "400px" }}
                />
                <Box
                  sx={{
                    bottom: "80px",
                    left: "100px",
                    color: "white",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 900,
                      mb: 1,
                      position: "absolute",
                      bottom: "120px",
                      color: "white",
                      textAlign:"center",
                      position: "absolute",
                      top: { xs: "10%", sm: "10%", md: "20%", lg: "20%" },
                      left: { xs: "8%", sm: "8%", md: "20%", lg: "20%" },
                    }}
                  >
                    Have you any question? Get A Consultation
                  </Typography>
                  <Typography
                    variant="p"
                    sx={{
                      position: "relative",
                      bottom: "50px",
                      color: "white",
                      textAlign:"center",
                      position: "absolute",
                      top: { xs: "42%", sm: "42%", md: "40%", lg: "40%" },
                      left: { xs: "8%", sm: "8%", md: "20%", lg: "20%" },
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Box>
        </div>

        <Box sx={{ mt: 5, px: 3 }}>
          <Grid
            container
            sx={{
              position: "relative",
              bottom: "130px",
              //left: "100px",
              color: "white",
            }}
          >
            <Grid item xs={12} sm={6} md={3}>
              <Card variant="outlined" sx={{ boxShadow: 3, borderRadius: 2 }}>
                <CardMedia
                  component="div"
                  style={{
                    fontSize: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "15px",
                  }}
                >
                  <SupervisorAccountIcon sx={{ fontSize: 50 }} />
                </CardMedia>
                <CardContent>
                  <Typography
                    variant="h5"
                    style={{
                      color: "#8b3eea",
                      fontSize: "40px",
                      textAlign: "center",
                    }}
                  >
                    <NumberCounter end={2348} delay={2} className="increment" />
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: 700, textAlign: "center" }}
                  >
                    Partners
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card variant="outlined" sx={{ boxShadow: 3, borderRadius: 2 }}>
                <CardMedia
                  component="div"
                  style={{
                    fontSize: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "15px",
                  }}
                >
                  <HouseIcon sx={{ fontSize: 50 }} />
                </CardMedia>
                <CardContent>
                  <Typography
                    variant="h5"
                    style={{
                      color: "#8b3eea",
                      fontSize: "40px",
                      textAlign: "center",
                    }}
                  >
                    <NumberCounter end={1748} delay={2} className="increment" />
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: 700, textAlign: "center" }}
                  >
                    
                    Listed Property
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card variant="outlined" sx={{ boxShadow: 3, borderRadius: 2 }}>
                <CardMedia
                  component="div"
                  style={{
                    fontSize: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "15px",
                  }}
                >
                  <PublicIcon sx={{ fontSize: 50 }} />
                </CardMedia>
                <CardContent>
                  <Typography
                    variant="h5"
                    style={{
                      color: "#8b3eea",
                      fontSize: "40px",
                      textAlign: "center",
                    }}
                  >
                    <NumberCounter end={4287} delay={2} className="increment" />
                   
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: 700, textAlign: "center" }}
                  >
                    Destinations
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card variant="outlined" sx={{ boxShadow: 3, borderRadius: 2 }}>
                <CardMedia
                  component="div"
                  style={{
                    fontSize: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "15px",
                  }}
                >
                  <EditCalendarIcon sx={{ fontSize: 50 }} />
                </CardMedia>
                <CardContent>
                  <Typography
                    variant="h5"
                    style={{
                      color: "#8b3eea",
                      fontSize: "40px",
                      textAlign: "center",
                    }}
                  >
                    <NumberCounter end={40} delay={2} className="increment" />
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{ fontWeight: 700, textAlign: "center" }}
                  >
                    Booking
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        <Box>
          <Typography
            variant="h4"
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
            Customer review
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
              },
            }}
          />
        </Box>
        <Box sx={{ mt: 5, px: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" sx={{ boxShadow: 3, borderRadius: 4 }}>
                <CardMedia
                  component="div"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src="images/image6.png" alt="" />
                </CardMedia>

                <CardContent>
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: 500,
                      textAlign: "center",
                      paddingTop: "40px",
                    }}
                  >
                    Jack cremer
                  </Typography>
                  <Typography variant="body1" style={{ textAlign: "center" }}>
                    Manager
                  </Typography>

                  <Typography
                    variant="body1"
                    style={{ textAlign: "center", paddingTop: "30px" }}
                  >
                    "Loved the overall tour for all 6 days covering jaipur
                    jodhpur and jaisalmer. worth ur money for sure. thanks.
                    Driver was very good and polite and safe driving for all 6
                    days. on time pickup and drop overall. Thanks for it."
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" sx={{ boxShadow: 3, borderRadius: 4 }}>
                <CardMedia
                  component="div"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src="images/image6.png" alt="" />
                </CardMedia>

                <CardContent>
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: 500,
                      textAlign: "center",
                      paddingTop: "40px",
                    }}
                  >
                    Jack cremer
                  </Typography>
                  <Typography variant="body1" style={{ textAlign: "center" }}>
                    Manager
                  </Typography>

                  <Typography
                    variant="body1"
                    style={{ textAlign: "center", paddingTop: "30px" }}
                  >
                    "Loved the overall tour for all 6 days covering jaipur
                    jodhpur and jaisalmer. worth ur money for sure. thanks.
                    Driver was very good and polite and safe driving for all 6
                    days. on time pickup and drop overall. Thanks for it."
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card variant="outlined" sx={{ boxShadow: 3, borderRadius: 4 }}>
                <CardMedia
                  component="div"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src="images/image6.png" alt="" />
                </CardMedia>

                <CardContent>
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: 500,
                      textAlign: "center",
                      paddingTop: "40px",
                    }}
                  >
                    Jack cremer
                  </Typography>
                  <Typography variant="body1" style={{ textAlign: "center" }}>
                    Manager
                  </Typography>

                  <Typography
                    variant="body1"
                    style={{ textAlign: "center", paddingTop: "30px" }}
                  >
                    "Loved the overall tour for all 6 days covering jaipur
                    jodhpur and jaisalmer. worth ur money for sure. thanks.
                    Driver was very good and polite and safe driving for all 6
                    days. on time pickup and drop overall. Thanks for it."
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
        {/* <Newsletter />
        <Footer /> */}
      </Box>
    </>
  );
};

export default About;

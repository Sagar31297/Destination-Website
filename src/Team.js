import React from "react";
import Header from "./Header";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavLink } from "react-router-dom";
import Newsletter from "./Newsletter";
import Footer from "./Footer";


const cardMedia = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
};

const cardContent = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(255, 255, 255, 1)",
  padding: 2,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  opacity: 0,
  transform: "translateY(100%)",
  transition: "opacity 0.3s, transform 0.3s",
};
const Team = () => {
 return (
    <>
      <Header />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={12}>
            <Box sx={{ p: 5, mt: 5 }}>
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  fontWeight: 700,
                  textAlign: "center",
                  position: "relative",
                  fontSize: { xs: "23px", sm: "23px", md: "30px", lg: "30px" },
                }}
              >
                Meet with our experienced team members
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
            <Box sx={{ p: 5, mt: 5 }}>
              <Typography
                variant="h5"
                component="h5"
                color="secondary"
                sx={{
                  textAlign: "center",
                  position: "relative",
                }}
              >
                Our Leaders
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    height: "1px",
                    backgroundColor: "#dcdcdc",
                    width: "calc(100% - 30px)",
                    top: "20px",
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ p: 4 }}>
            <Card
              variant="outlined"
              sx={{ boxShadow: 3, borderRadius: 4, width: "100%" }}
            >
              <CardMedia
                component="div"
                style={cardMedia}
                sx={{
                  "&:hover .card-content": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                }}
              >
                <img
                  src="../images/image8.png"
                  alt=""
                  style={{ 
                    width: "100%", 
                    height: "400px",
                    objectFit: "cover" 
                  }}
                />
                <CardContent className="card-content" sx={cardContent}>
                  <div
                    style={{ position: "absolute", top: -15, display: "flex" }}
                  >
                    <NavLink to="/error">
                      <FacebookIcon
                        className="icons_style"
                      />
                    </NavLink>
                    <NavLink to="/error">
                      <TwitterIcon className="icons_style" />
                    </NavLink>
                    <NavLink to="/error">
                      <InstagramIcon className="icons_style" />
                    </NavLink>
                    <NavLink to="/error">
                      <LinkedInIcon className="icons_style" />
                    </NavLink>
                  </div>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#8b3eea",
                      textAlign: "center",
                      fontWeight: 700,
                      marginTop: "10px",
                    }}
                  >
                    Anna Naomi
                  </Typography>
                  <Typography variant="body1" style={{ textAlign: "center" }}>
                    CTO
                  </Typography>
                </CardContent>
              </CardMedia>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ p: 4 }}>
            <Card
              variant="outlined"
              sx={{ boxShadow: 3, borderRadius: 4, width: "100%" }}
            >
              <CardMedia
                component="div"
                style={cardMedia}
                sx={{
                  "&:hover .card-content": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                }}
              >
                <img
                  src="../images/image9.png"
                  alt=""
                  style={{ 
                    width: "100%", 
                    height: "400px", 
                    objectFit: "cover" 
                  }}
                />
                <CardContent className="card-content" sx={cardContent}>
                  <div
                    style={{ position: "absolute", top: -15, display: "flex" }}
                  >
                    <NavLink to="/error">
                      <FacebookIcon
                        className="icons_style"
                        sx={{
                          "&:hover .icons_style": {
                            color: "white",
                            backgroundColor: "#8b3eea",
                          },
                        }}
                      />
                    </NavLink>

                    <NavLink to="/error">
                      <TwitterIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <InstagramIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <LinkedInIcon className="icons_style" />
                    </NavLink>
                  </div>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#8b3eea",
                      textAlign: "center",
                      fontWeight: 700,
                      marginTop: "10px",
                    }}
                  >
                    Anna Naomi
                  </Typography>
                  <Typography variant="body1" style={{ textAlign: "center" }}>
                    CTO
                  </Typography>
                </CardContent>
              </CardMedia>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ p: 4 }}>
            <Card
              variant="outlined"
              sx={{ boxShadow: 3, borderRadius: 4, width: "100%" }}
            >
              <CardMedia
                component="div"
                style={cardMedia}
                sx={{
                  "&:hover .card-content": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                }}
              >
                <img
                  src="../images/image10.png"
                  alt=""
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
                <CardContent className="card-content" sx={cardContent}>
                  <div
                    style={{ position: "absolute", top: -15, display: "flex" }}
                  >
                    <NavLink to="/error">
                      <FacebookIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <TwitterIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <InstagramIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <LinkedInIcon className="icons_style" />
                    </NavLink>
                  </div>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#8b3eea",
                      textAlign: "center",
                      fontWeight: 700,
                      marginTop: "10px",
                    }}
                  >
                    Anna Naomi
                  </Typography>
                  <Typography variant="body1" style={{ textAlign: "center" }}>
                    CTO
                  </Typography>
                </CardContent>
              </CardMedia>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ p: 4 }}>
            <Card
              variant="outlined"
              sx={{ boxShadow: 3, borderRadius: 4, width: "100%" }}
            >
              <CardMedia
                component="div"
                style={cardMedia}
                sx={{
                  "&:hover .card-content": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                }}
              >
                <img
                  src="../images/image11.png"
                  alt=""
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
                <CardContent className="card-content" sx={cardContent}>
                  <div
                    style={{ position: "absolute", top: -15, display: "flex" }}
                  >
                    <NavLink to="/error">
                      <FacebookIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <TwitterIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <InstagramIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <LinkedInIcon className="icons_style" />
                    </NavLink>
                  </div>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#8b3eea",
                      textAlign: "center",
                      fontWeight: 700,
                      marginTop: "10px",
                    }}
                  >
                    Anna Naomi
                  </Typography>
                  <Typography variant="body1" style={{ textAlign: "center" }}>
                    CTO
                  </Typography>
                </CardContent>
              </CardMedia>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ p: 5, mt: 5 }}>
              <Typography
                variant="h5"
                component="h5"
                color="secondary"
                sx={{
                  textAlign: "center",
                  position: "relative",
                }}
              >
                Our Leaders
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    height: "1px",
                    backgroundColor: "#dcdcdc",
                    width: "calc(100% - 30px)",
                    top: "20px",
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ p: 4 }}>
            <Card
              variant="outlined"
              sx={{ boxShadow: 3, borderRadius: 4, width: "100%" }}
            >
              <CardMedia
                component="div"
                style={cardMedia}
                sx={{
                  "&:hover .card-content": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                }}
              >
                <img
                  src="../images/image12.png"
                  alt=""
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
                <CardContent className="card-content" sx={cardContent}>
                  <div
                    style={{ position: "absolute", top: -15, display: "flex" }}
                  >
                    <NavLink to="/error">
                      <FacebookIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <TwitterIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <InstagramIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <LinkedInIcon className="icons_style" />
                    </NavLink>
                  </div>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#8b3eea",
                      textAlign: "center",
                      fontWeight: 700,
                      marginTop: "10px",
                    }}
                  >
                    Anna Naomi
                  </Typography>
                  <Typography variant="body1" style={{ textAlign: "center" }}>
                    CTO
                  </Typography>
                </CardContent>
              </CardMedia>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ p: 4 }}>
            <Card
              variant="outlined"
              sx={{ boxShadow: 3, borderRadius: 4, width: "100%" }}
            >
              <CardMedia
                component="div"
                style={cardMedia}
                sx={{
                  "&:hover .card-content": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                }}
              >
                <img
                  src="../images/image13.png"
                  alt=""
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
                <CardContent className="card-content" sx={cardContent}>
                  <div
                    style={{ position: "absolute", top: -15, display: "flex" }}
                  >
                    <NavLink to="/error">
                      <FacebookIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <TwitterIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <InstagramIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <LinkedInIcon className="icons_style" />
                    </NavLink>
                  </div>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#8b3eea",
                      textAlign: "center",
                      fontWeight: 700,
                      marginTop: "10px",
                    }}
                  >
                    Anna Naomi
                  </Typography>
                  <Typography variant="body1" style={{ textAlign: "center" }}>
                    CTO
                  </Typography>
                </CardContent>
              </CardMedia>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ p: 4 }}>
            <Card
              variant="outlined"
              sx={{ boxShadow: 3, borderRadius: 4, width: "100%" }}
            >
              <CardMedia
                component="div"
                style={cardMedia}
                sx={{
                  "&:hover .card-content": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                }}
              >
                <img
                  src="../images/image14.png"
                  alt=""
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
                <CardContent className="card-content" sx={cardContent}>
                  <div
                    style={{ position: "absolute", top: -15, display: "flex" }}
                  >
                    <NavLink to="/error">
                      <FacebookIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <TwitterIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <InstagramIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <LinkedInIcon className="icons_style" />
                    </NavLink>
                  </div>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#8b3eea",
                      textAlign: "center",
                      fontWeight: 700,
                      marginTop: "10px",
                    }}
                  >
                    Anna Naomi
                  </Typography>
                  <Typography variant="body1" style={{ textAlign: "center" }}>
                    CTO
                  </Typography>
                </CardContent>
              </CardMedia>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ p: 4 }}>
            <Card
              variant="outlined"
              sx={{ boxShadow: 3, borderRadius: 4, width: "100%" }}
            >
              <CardMedia
                component="div"
                style={cardMedia}
                sx={{
                  "&:hover .card-content": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                }}
              >
                <img
                  src="../images/image15.png"
                  alt=""
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
                <CardContent className="card-content" sx={cardContent}>
                  <div
                    style={{ position: "absolute", top: -15, display: "flex" }}
                  >
                    <NavLink to="/error">
                      <FacebookIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <TwitterIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <InstagramIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <LinkedInIcon className="icons_style" />
                    </NavLink>
                  </div>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#8b3eea",
                      textAlign: "center",
                      fontWeight: 700,
                      marginTop: "10px",
                    }}
                  >
                    Anna Naomi
                  </Typography>
                  <Typography variant="body1" style={{ textAlign: "center" }}>
                    CTO
                  </Typography>
                </CardContent>
              </CardMedia>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ p: 4 }}>
            <Card
              variant="outlined"
              sx={{ boxShadow: 3, borderRadius: 4, width: "100%" }}
            >
              <CardMedia
                component="div"
                style={cardMedia}
                sx={{
                  "&:hover .card-content": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                }}
              >
                <img
                  src="../images/image16.png"
                  alt=""
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
                <CardContent className="card-content" sx={cardContent}>
                  <div
                    style={{ position: "absolute", top: -15, display: "flex" }}
                  >
                    <NavLink to="/error">
                      <FacebookIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <TwitterIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <InstagramIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <LinkedInIcon className="icons_style" />
                    </NavLink>
                  </div>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#8b3eea",
                      textAlign: "center",
                      fontWeight: 700,
                      marginTop: "10px",
                    }}
                  >
                    Anna Naomi
                  </Typography>
                  <Typography variant="body1" style={{ textAlign: "center" }}>
                    CTO
                  </Typography>
                </CardContent>
              </CardMedia>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ p: 4 }}>
            <Card
              variant="outlined"
              sx={{ boxShadow: 3, borderRadius: 4, width: "100%" }}
            >
              <CardMedia
                component="div"
                style={cardMedia}
                sx={{
                  "&:hover .card-content": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                }}
              >
                <img
                  src="../images/image17.png"
                  alt=""
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
                <CardContent className="card-content" sx={cardContent}>
                  <div
                    style={{ position: "absolute", top: -15, display: "flex" }}
                  >
                    <NavLink to="/error">
                      <FacebookIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <TwitterIcon className="icons_style" />
                    </NavLink>
                    <NavLink to="/error">
                      <InstagramIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <LinkedInIcon className="icons_style" />
                    </NavLink>
                  </div>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#8b3eea",
                      textAlign: "center",
                      fontWeight: 700,
                      marginTop: "10px",
                    }}
                  >
                    Anna Naomi
                  </Typography>
                  <Typography variant="body1" style={{ textAlign: "center" }}>
                    CTO
                  </Typography>
                </CardContent>
              </CardMedia>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ p: 4 }}>
            <Card
              variant="outlined"
              sx={{ boxShadow: 3, borderRadius: 4, width: "100%" }}
            >
              <CardMedia
                component="div"
                style={cardMedia}
                sx={{
                  "&:hover .card-content": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                }}
              >
                <img
                  src="../images/image18.png"
                  alt=""
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
                <CardContent className="card-content" sx={cardContent}>
                  <div
                    style={{ position: "absolute", top: -15, display: "flex" }}
                  >
                    <NavLink to="/error">
                      <FacebookIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <TwitterIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <InstagramIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <LinkedInIcon className="icons_style" />
                    </NavLink>
                  </div>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#8b3eea",
                      textAlign: "center",
                      fontWeight: 700,
                      marginTop: "10px",
                    }}
                  >
                    Anna Naomi
                  </Typography>
                  <Typography variant="body1" style={{ textAlign: "center" }}>
                    CTO
                  </Typography>
                </CardContent>
              </CardMedia>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ p: 4 }}>
            <Card
              variant="outlined"
              sx={{ boxShadow: 3, borderRadius: 4, width: "100%" }}
            >
              <CardMedia
                component="div"
                style={cardMedia}
                sx={{
                  "&:hover .card-content": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                }}
              >
                <img
                  src="../images/image19.png"
                  alt=""
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
                <CardContent className="card-content" sx={cardContent}>
                  <div
                    style={{ position: "absolute", top: -15, display: "flex" }}
                  >
                    <NavLink to="/error">
                      <FacebookIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <TwitterIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <InstagramIcon className="icons_style" />
                    </NavLink>

                    <NavLink to="/error">
                      <LinkedInIcon className="icons_style" />
                    </NavLink>
                  </div>
                  <Typography
                    variant="h6"
                    style={{
                      color: "#8b3eea",
                      textAlign: "center",
                      fontWeight: 700,
                      marginTop: "10px",
                    }}
                  >
                    Anna Naomi
                  </Typography>
                  <Typography variant="body1" style={{ textAlign: "center" }}>
                    CTO
                  </Typography>
                </CardContent>
              </CardMedia>
            </Card>
          </Grid>
        </Grid>
        
            {/* <Newsletter />
            <Footer /> */}
      </Box>
    </>
  );
};

export default Team;


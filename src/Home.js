import React, { useState, Component } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import { cardContent, cardMedia } from "./Team";
import { Button } from "@mui/material";
import ServiceData from "./ServicesData";
import CustomCard from "./CustomCard";
import SimpleSlider from "./SimpleSlider";
import DestinationData from "./DestinationData";
import DestinationCard from "./DestinationCard";
import Logos from "./Logos";
import Newsletter from "./Newsletter";
import Footer from "./Footer";
import "./App.css";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterProducts = (category) => {
    if (category.includes("All")) {
      return ServiceData;
    } else {
      return ServiceData.filter((product) =>
        product.category.some((pro) => category.includes(pro))
      );
    }
  };

  const filterDestinations = (categories) => {
    if (categories.includes("All")) {
      return DestinationData;
    } else {
      return DestinationData.filter((destination) =>
        destination.category.some((cat) => categories.includes(cat))
      );
    }
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container sx={{  }}>
          <Grid item xs={12} sx={{ position: "relative" }} className="home-banner">
            {/* <img
              src="../images/image59.png"
              alt=""
              style={{ width: "100%", height: "auto", position: "relative" }}
            /> */}
            <Typography
              variant="h5"
              component="h5"
              sx={{
                textAlign: "center",
                fontWeight: 800,
                color: "primary",
                fontSize:{xs: "20px", sm: "25px", md: "30px", lg: "30px"},
                position: "absolute",
                top: { xs: "30%", sm: "30%", md: "40%", lg: "40%" },
                left: { xs: "15%", sm: "15%", md:"30%", lg:"30%" },
              }}
            >
              Explore the world together
            </Typography>

            <Typography
              variant="p"
              component="p"
              sx={{
                textAlign: "center",
                color: "white",
                fontSize: "20px",
                position: "absolute",
                top: { xs: "45%", sm: "45%", md: "60%", lg: "60%" },
                left: { xs: "8%", sm: "8%", md: "30%", lg: "30%" },
              }}
            >
              Find awesome flights, hotels, tours, cars, and packages
            </Typography>
          </Grid>

          <Grid container spacing={2} sx={{ mt: 2, pr : 1}}>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                minHeight: "250px",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: { xs: "25px", sm: "25px", md: "30px", lg: "30px" },
                }}
              >
                Go beyond your imagination
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
              <br />
              <br />
              <Typography
                variant="h6"
                sx={{ textAlign: "center", fontSize: "18px" }}
              >
                Discover your ideal experience with us
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <CardMedia
                component="div"
                className="scaleEffect"
                sx={{ position: "relative", paddingTop: "10%" }}
              >
                <img
                  src="images/image21.png"
                  alt=""
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <Typography
                  variant="h6"
                  className="content"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    color: "white",
                    textAlign: "center",
                    fontSize: "25px",
                    // padding: "8px",
                  }}
                >
                  7% Discount for All Airlines
                </Typography>
              </CardMedia>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <CardMedia
                component="div"
                className="scaleEffect"
                sx={{ position: "relative", paddingTop: "10%" }}
              >
                <img
                  src="images/image22.png"
                  alt=""
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <Typography
                  variant="h6"
                  className="content"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    color: "white",
                    textAlign: "center",
                    fontSize: "25px",
                    // padding: "8px",
                  }}
                >
                  Travel around the world
                </Typography>
              </CardMedia>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <CardMedia
                component="div"
                className="scaleEffect"
                sx={{ position: "relative", paddingTop: "10%" }}
              >
                <img
                  src="images/image23.png"
                  alt=""
                  style={{
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
                <Typography
                  variant="h6"
                  className="content"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    color: "white",
                    textAlign: "center",
                    fontSize: "25px",
                    // padding: "8px",
                  }}
                >
                  Luxury resorts top deals
                </Typography>
              </CardMedia>
            </Grid>
          </Grid>

          {/* <Grid container sx={{ mt: 3, pl: 3 }}>
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
                  Top destinations
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
            <Box
              display="flex"
              sx={{
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                },
              }}
            >
              <Box gridColumn="span 6">
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <div className="colorEffectOverlay">
                    <CardMedia component="div" sx={{ position: "relative" }}>
                      <img
                        src="images/image24.png"
                        alt=""
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "cover",
                          background: "none",
                        }}
                      />
                      <Typography
                        variant="h4"
                        component="h4"
                        style={{
                          position: "absolute",
                          bottom: "40%",
                          width: "100%",
                          color: "white",
                          textAlign: "center",
                          padding: "8px",
                        }}
                      >
                        Up to 50% Off Holiday packages
                        <br />
                        <Button
                          variant="contained"
                          size="large"
                          color="secondary"
                        >
                          Book Now
                        </Button>
                      </Typography>
                    </CardMedia>
                  </div>
                </Grid>
              </Box>
              <Box
                gridColumn= "span 6"
                sx={{ pl: { xs: 0, sm: 3, md: 3, lg: 3, xl: 5} }}
              >
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <div className="colorEffectOverlay">
                    <CardMedia component="div" sx={{ position: "relative" }}>
                      <img
                        src="images/image25.png"
                        alt=""
                        style={{
                          width: "100%",
                          height: "auto",
                          marginTop: "15px",
                          objectFit: "cover",
                          background: "none",
                        }}
                      />
                      <Typography
                        variant="h6"
                        component="h6"
                        style={{
                          position: "absolute",
                          bottom: 0,
                          width: "100%",
                          color: "white",
                          textAlign: "center",
                          padding: "8px",
                        }}
                      >
                        China
                      </Typography>
                    </CardMedia>
                  </div>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <div className="colorEffectOverlay">
                    <CardMedia component="div" sx={{ position: "relative" }}>
                      <img
                        src="images/image26.png"
                        alt=""
                        style={{
                          width: "100%",
                          height: "auto",
                          marginTop: "15px",
                          objectFit: "cover",
                          background: "none",
                        }}
                      />
                      <Typography
                        variant="h6"
                        component="h6"
                        style={{
                          position: "absolute",
                          bottom: 0,
                          width: "100%",
                          color: "white",
                          textAlign: "center",
                          padding: "8px",
                        }}
                      >
                        Darjeeling
                      </Typography>
                    </CardMedia>
                  </div>
                </Grid>

                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <div className="colorEffectOverlay">
                    <CardMedia component="div" sx={{ position: "relative" }}>
                      <img
                        src="images/image27.png"
                        alt=""
                        style={{
                          width: "100%",
                          height: "auto",
                          marginTop: "15px",
                          objectFit: "cover",
                          background: "none",
                        }}
                      />
                      <Typography
                        variant="h6"
                        component="h6"
                        style={{
                          position: "absolute",
                          bottom: 0,
                          width: "100%",
                          color: "white",
                          textAlign: "center",
                          padding: "8px",
                        }}
                      >
                        Malaysia
                      </Typography>
                    </CardMedia>
                  </div>
                </Grid>
              </Box>
              <Box
                gridColumn={{ xs: "12", sm: "12", md: "6", lg: "6", xl: "6" }}
                sx={{ pl: { xs: 0, sm: 3, md: 3, lg: 3, xl: 5 } }}
              >
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <div className="colorEffectOverlay">
                    <CardMedia component="div" sx={{ position: "relative" }}>
                      <img
                        src="images/image28.png"
                        alt=""
                        style={{
                          width: "100%",
                          height: "auto",
                          marginTop: "15px",
                          objectFit: "cover",
                          background: "none",
                        }}
                      />
                      <Typography
                        variant="h6"
                        component="h6"
                        style={{
                          position: "absolute",
                          bottom: 0,
                          width: "100%",
                          color: "white",
                          textAlign: "center",
                          padding: "8px",
                        }}
                      >
                        Gangtok
                      </Typography>
                    </CardMedia>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <div className="colorEffectOverlay">
                    <CardMedia component="div" sx={{ position: "relative" }}>
                      <img
                        src="images/image29.png"
                        alt=""
                        style={{
                          width: "100%",
                          height: "auto",
                          marginTop: "15px",
                          objectFit: "cover",
                          background: "none",
                        }}
                      />
                      <Typography
                        variant="h6"
                        component="h6"
                        style={{
                          position: "absolute",
                          bottom: 0,
                          width: "100%",
                          color: "white",
                          textAlign: "center",
                          padding: "8px",
                        }}
                      >
                        Thailand
                      </Typography>
                    </CardMedia>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <div className="colorEffectOverlay">
                    <CardMedia component="div" sx={{ position: "relative" }}>
                      <img
                        src="images/image30.png"
                        alt=""
                        style={{
                          width: "100%",
                          height: "auto",
                          marginTop: "15px",
                          objectFit: "cover",
                          background: "none",
                        }}
                      />
                      <Typography
                        variant="h6"
                        component="h6"
                        style={{
                          position: "absolute",
                          bottom: 0,
                          width: "100%",
                          color: "white",
                          textAlign: "center",
                          padding: "8px",
                        }}
                      >
                        Australia
                      </Typography>
                    </CardMedia>
                  </div>
                </Grid>
              </Box>
              <Box
                gridColumn={{ xs: "12", sm: "12", md: "6", lg: "6", xl: "6" }}
                sx={{ pl: { xs: 0, sm: 3, md: 3, lg: 3, xl: 5} }}
              >
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <div className="colorEffectOverlay">
                    <CardMedia component="div" sx={{ position: "relative" }}>
                      <img
                        src="images/image31.png"
                        alt=""
                        style={{
                          width: "100%",
                          height: "auto",
                          marginTop: "15px",
                          objectFit: "cover",
                          background: "none",
                        }}
                      />
                      <Typography
                        variant="h6"
                        component="h6"
                        style={{
                          position: "absolute",
                          bottom: 0,
                          width: "100%",
                          color: "white",
                          textAlign: "center",
                          padding: "8px",
                        }}
                      >
                        London
                      </Typography>
                    </CardMedia>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <div className="colorEffectOverlay">
                    <CardMedia component="div" sx={{ position: "relative" }}>
                      <img
                        src="images/image32.png"
                        alt=""
                        style={{
                          width: "100%",
                          height: "auto",
                          marginTop: "15px",
                          objectFit: "cover",
                          background: "none",
                        }}
                      />
                      <Typography
                        variant="h6"
                        component="h6"
                        style={{
                          position: "absolute",
                          bottom: 0,
                          width: "100%",
                          color: "white",
                          textAlign: "center",
                          padding: "8px",
                        }}
                      >
                        USA
                      </Typography>
                    </CardMedia>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <CardMedia component="div" sx={{ position: "relative" }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      sx={{
                        padding: "15px",
                        width: "100%",
                        marginTop: "10px",
                        borderRadius: "20px",
                        ":hover": {
                          backgroundColor: "#212529",
                        },
                      }}
                    >
                      View All
                    </Button>
                  </CardMedia>
                </Grid>
              </Box>
            </Box>
          </Grid> */}
          <Grid container spacing={2} sx={{ p: 2 }}>
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
                      xs: "25px",
                      sm: "25px",
                      md: "30px",
                      lg: "30px",
                    },
                  }}
                >
                  Explore our hot deals
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

            <Grid
              item
              xs={12}
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "15px auto",
              }}
            >
              <Button
                variant={
                  selectedCategory === "Hotels" ? "contained" : "outlined"
                }
                color="secondary"
                sx={{ margin: "8px" }}
                onClick={() => setSelectedCategory("Hotels")}
              >
                Hotels
              </Button>
              <Button
                variant={
                  selectedCategory === "Tours" ? "contained" : "outlined"
                }
                color="secondary"
                sx={{ margin: "8px" }}
                onClick={() => setSelectedCategory("Tours")}
              >
                Tours
              </Button>
              <Button
                variant={
                  selectedCategory === "Space" ? "contained" : "outlined"
                }
                color="secondary"
                sx={{ margin: "8px" }}
                onClick={() => setSelectedCategory("Space")}
              >
                Space
              </Button>
              <Button
                variant={
                  selectedCategory === "Events" ? "contained" : "outlined"
                }
                color="secondary"
                sx={{ margin: "8px" }}
                onClick={() => setSelectedCategory("Events")}
              >
                Events
              </Button>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{ pl: 2 }}>
            {filterProducts(selectedCategory).map((val, id) => (
              <Grid item xs={12} sm={6} md={3} key={id} className="scaleEffect">
                <CustomCard
                  image={val.image}
                  title={val.title}
                  rating={val.rating}
                  price={val.price}
                />
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={3} sx={{mt:5, pl:1}}>
            <Grid item xs={12} sm={12} md={6}>
              <CardMedia
                component="div"
                className="colorEffectOverlay"
                sx={{ position: "relative" }}
              >
                <img
                  src="images/image41.png"
                  alt=""
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    background: "none",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "15%",
                    left: "5%",
                    right: "5%",
                    padding: "8px",
                    color: "white",
                  }}
                >
                  <Typography variant="h4">Special Offers</Typography>
                  <Typography variant="p">
                    Invidunt ut labore et dolore magna aliquyam erat, sed diam
                    voluptua. At vero eos et accusam et justo duo dolores et ea
                    rebum. Stet clita kasd dolor sit amet. Lorem ipsum dolor sit
                    amet.
                  </Typography>
                  <br />
                  <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                    Holiday Deals
                  </Button>
                </div>
              </CardMedia>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <CardMedia
                component="div"
                className="colorEffectOverlay"
                sx={{ position: "relative" }}
              >
                <img
                  src="images/image42.png"
                  alt=""
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    background: "none",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "15%",
                    left: "5%",
                    right: "5%",
                    padding: "8px",
                    color: "white",
                  }}
                >
                  <Typography variant="h4">News letter</Typography>
                  <Typography variant="p">
                    Invidunt ut labore et dolore magna aliquyam erat, sed diam
                    voluptua. At vero eos et.
                  </Typography>
                  <br />
                  <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                    Subscribe Now
                  </Button>
                </div>
              </CardMedia>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <CardMedia
                component="div"
                className="colorEffectOverlay"
                sx={{ position: "relative" }}
              >
                <img
                  src="images/image43.png"
                  alt=""
                  style={{
                    width: "100%",
                    objectFit: "contain",
                    background: "none",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "15%",
                    left: "5%",
                    right: "5%",
                    padding: "8px",
                    color: "white",
                  }}
                >
                  <Typography variant="h4">Travel tips</Typography>
                  <Typography variant="p">
                    Invidunt ut labore et dolore magna aliquyam erat, sed diam
                    voluptua. At vero eos et.
                  </Typography>
                  <br />
                  <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                    Get Tips
                  </Button>
                </div>
              </CardMedia>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ p: 4, mt: 5 }}>
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
                Our best promotional tours
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
          <Grid container spacing={2} sx={{ pl: 5 }}>
            <Box
              sx={{
                maxWidth: { xs: "90%", sm: "90%", md: "100%", lg: "100%" },
              }}
            >
              <SimpleSlider />
            </Box>
          </Grid>

          <Grid container spacing={2} sx={{ mt:5 }}>
          <Grid item xs={12}>
            <Box sx={{ p: 3}}>
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  textAlign: "center",
                  position: "relative",
                  fontWeight: 700,
                  fontSize: { xs: "23px", sm: "23px", md: "30px", lg: "30px" },
                }}
              >
                Destinations for you
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
            <Grid
              item
              xs={10}
              sm={10}
              md={10}
              lg={12}
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                margin: {xs:"15px auto", sm: "15px auto", md: "15px auto", lg: "15px auto"},
              }}
            >
              <Button
                variant={
                  selectedCategory === "Nepal" ? "contained" : "outlined"
                }
                color="secondary"
                sx={{ m: 1, minWidth: "120px" }}
                onClick={() => setSelectedCategory("Nepal")}
              >
                Nepal
              </Button>
              <Button
                variant={
                  selectedCategory === "Malaysia" ? "contained" : "outlined"
                }
                color="secondary"
                sx={{ m: 1, minWidth: "120px" }}
                onClick={() => setSelectedCategory("Malaysia")}
              >
                Malaysia
              </Button>
              <Button
                variant={
                  selectedCategory === "Indonesia" ? "contained" : "outlined"
                }
                color="secondary"
                sx={{ m: 1, minWidth: "120px" }}
                onClick={() => setSelectedCategory("Indonesia")}
              >
                Indonesia
              </Button>
              <Button
                variant={
                  selectedCategory === "Turkey" ? "contained" : "outlined"
                }
                color="secondary"
                sx={{ m: 1, minWidth: "120px" }}
                onClick={() => setSelectedCategory("Turkey")}
              >
                Turkey
              </Button>
              <Button
                variant={
                  selectedCategory === "China" ? "contained" : "outlined"
                }
                color="secondary"
                sx={{ m: 1, minWidth: "120px" }}
                onClick={() => setSelectedCategory("China")}
              >
                China
              </Button>
              <Button
                variant={
                  selectedCategory === "Darjeeling" ? "contained" : "outlined"
                }
                color="secondary"
                sx={{ m: 1, minWidth: "120px" }}
                onClick={() => setSelectedCategory("Darjeeling")}
              >
                Darjeeling
              </Button>
              <Button
                variant={
                  selectedCategory === "Italy" ? "contained" : "outlined"
                }
                color="secondary"
                sx={{ m: 1, minWidth: "120px" }}
                onClick={() => setSelectedCategory("Italy")}
              >
                Italy
              </Button>
            </Grid>

          <Grid container spacing={2} sx={{ p: 2, marginLeft:4 }}>
            {filterDestinations(selectedCategory).map((val, id) => (
              <Grid item xs={12} sm={6} md={4} key={id}>
                <DestinationCard
                  style={{ display: "flex", flexDirection: "row" }}
                  image={val.image}
                  title={val.title}
                  rating={val.rating}
                  price={val.price}
                />
              </Grid>
            ))}
          </Grid>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ p: 5, mt: 5 }}>
              <Typography
                variant="h4"
                component="h4"
                sx={{
                  textAlign: "center",
                  position: "relative",
                  fontWeight: 700,
                  fontSize: { xs: "23px", sm: "23px", md: "30px", lg: "30px" },
                }}
              >
                Our partners
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
          <Box sx={{ minWidth: "80%" }}>
            <Logos />
          </Box>
        </Grid>
        {/* <Newsletter />
          <Footer /> */}
      </Box>
    </>
  );
};
export default Home;

import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import EmailIcon from "@mui/icons-material/Email";
import Typography from "@mui/material/Typography";

const Newsletter = () => {
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
          <Grid item xs={12} md={6}>
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
              {/* <div style={{ marginTop: "20px" }}> */}
                <Typography variant="p">
                Copyright © 2022 All Rights Reserved
                </Typography>
              {/* </div> */}
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                marginTop: "10px",
                padding: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 500,
                  textAlign: "right",
                }}
              >
                <img src="images/image20.png" alt="" />
              </Typography>

            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Newsletter;

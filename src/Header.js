import React from 'react'
// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Stack from '@mui/material/Stack';
//import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { NavLink, useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";


const Header = () => {

    //const navigate = useNavigate();
    const location = useLocation();
  return (
    <>
    <Grid>
      <div style={{ position: 'relative' }} className="common-banner">
          <Typography variant='h4' component='h4'
          style={{
            position: 'absolute',
            top: '40%', 
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontWeight:900,
            color: 'white',
            fontSize:{xs:'20px', sm:'25px', md:'40px', lg:'40px'},
            textTransform:"capitalize",
          }}
          >
              {location.pathname.replace("/", " ")} 
            </Typography>

            <Typography variant="p" component="p"
          style={{
            position: 'absolute',
            top: '60%', 
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            fontSize:"20px",
            textTransform:"capitalize",
          }}
          >
            <p><span><NavLink to="/">Home</NavLink></span>{location.pathname}</p>
          </Typography>

        
        </div>
        </Grid>
    </>
  )
}

export default Header
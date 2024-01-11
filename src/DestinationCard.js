import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const DestinationCard = (props) => {
  return (
   <>
   <Card sx={{ maxWidth: 600 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h5" sx={{fontSize:"17px", fontWeight:700}}>
            {props.title}
          </Typography>
          <Typography variant="h5">
            {props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
   </>
  )
}

export default DestinationCard;
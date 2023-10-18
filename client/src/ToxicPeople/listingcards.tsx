// prettier-ignore
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box, CardActions, Button } from '@mui/material';

type ListingCardProps = {
  name: string;
  bio: string;
  grade: string;
};
function ListingCard({ name, bio, grade }: ListingCardProps) {
  return (
    <Card sx={{ flexDirection: 'column' }}>
      <CardActionArea component={Link} to="/toxictraits">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="140"
          image="./profile.png"
          alt="profile pic"
        />
        <CardContent>
          <Typography variant="subtitle1" color="text.secondary">
            {grade}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {bio}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default ListingCard;

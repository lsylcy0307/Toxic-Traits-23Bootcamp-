// prettier-ignore
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box, CardActions, Button } from '@mui/material';

type ListingCardProps = {
  person_id: string;
  picture: string;
  firstName: string;
  lastName: string;
  toxicTraits: string[];
};
function ListingCard({ person_id, picture, firstName, lastName, toxicTraits}: ListingCardProps) {
  var person_url = "/toxictraits/?id=" + person_id;
  return (
    <Card sx={{ flexDirection: 'column' }}>
      <CardActionArea component={Link} to={person_url}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {firstName} {lastName}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="140"
          image= {picture}
          alt="profile pic"
        />
        <CardContent>
          <Typography>
            <ol>
              {toxicTraits.map((trait) => (
                <li>{trait}</li>
              ))}
            </ol>
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

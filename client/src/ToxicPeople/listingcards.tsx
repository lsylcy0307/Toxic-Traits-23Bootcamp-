// prettier-ignore
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box, CardActions, Button } from '@mui/material';

type ListingCardProps = {
  personId: string;
  picture: string;
  firstName: string;
  lastName: string;
  toxicTraits: string[];
};
function ListingCard({
  personId,
  picture,
  firstName,
  lastName,
  toxicTraits,
}: ListingCardProps) {
  const personUrl = `/toxictraits/?id=${personId}`;
  return (
    <Card sx={{ flexDirection: 'column' }}>
      <CardActionArea component={Link} to={personUrl}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {firstName} {lastName}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="140"
          image={picture}
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
    </Card>
  );
}

export default ListingCard;

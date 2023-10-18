// prettier-ignore
import React from 'react';
import './toxicpeople.css';
import { Box, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from './header';
import ListingCard from './listingcards';
import listings from './listings.json';

function ToxicPeoplePage() {
  return (
    <div className="r">
      <Header />
      <Box sx={{ padding: '0 80px' }}>
        <Box>
          <TextField
            id="filled-search"
            label="Search field"
            type="search"
            variant="filled"
          />
        </Box>
        <Box
          sx={{
            marginTop: '2rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 2,
          }}
        >
          {listings.map((listing, index) => (
            <ListingCard
              name={listing.name}
              bio={listing.bio}
              grade={listing.grade}
            />
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default ToxicPeoplePage;

/* eslint-disable no-underscore-dangle */
// prettier-ignore
import React, { useEffect, useState } from 'react';
import './toxicpeople.css';
import { Box, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from './header';
import ListingCard from './listingcards';
import listings from './listings.json';
import { getData } from '../util/api';

export interface Person {
  _id: string;
  pictureUrl: string;
  firstName: string;
  lastName: string;
  toxicTraits: string[];
}

function ToxicPeoplePage() {
  const [people, setPeople] = useState<Person[]>([]);
  useEffect(() => {
    const getPeople = async () => {
      const ppl = (await getData('toxic')).data as Person[];
      setPeople(ppl);
    };
    getPeople();
  }, []);
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
          {people.map((person, index) => (
            <ListingCard
              key={person._id}
              firstName={person.firstName}
              lastName={person.lastName}
              toxicTraits={person.toxicTraits}
              picture={person.pictureUrl}
              personId={person._id}
            />
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default ToxicPeoplePage;

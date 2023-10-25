// prettier-ignore
import React, { useState, useEffect } from 'react';
import './toxicpeople.css';
import { Box, Button, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSearchParams } from 'react-router-dom';
import Header from './header';
import ListingCard from './listingcards';
import { Person } from './toxicpeople';
import { getData } from '../util/api';

function ToxicTraitsPage() {
  const [searchParams] = useSearchParams();
  const personId = searchParams.get('id');

  const [personData, setPersonData] = useState<Person>();

  useEffect(() => {
    const getPerson = async () => {
      const pers: Person = (await getData(`toxic/${personId}`)).data;
      setPersonData(pers);
    };
    getPerson();
  }, [personId]);

  let page = <Typography>Loading</Typography>;
  if (personData) {
    page = (
      <>
        <h1>{`${personData.firstName} ${personData.lastName}`}</h1>
        <img src={personData.pictureUrl} alt="profile" />
        <Typography>Toxic Traits</Typography>
        <ul>
          {personData.toxicTraits.map((trait) => {
            return <li key={trait}>trait</li>;
          })}
        </ul>
      </>
    );
  }
  return (
    <div className="r">
      <Header />
      {page}
      {/* <Box sx={{ padding: '0 80px' }}>
        <div className='personalinfoWrapper'
          style={{display: 'flex', justifyContent: 'space-around'}}>
            <h1>Toxic Person! </h1>
            <ListingCard
                personId={personId}
                picture = {personData.pictureUrl}
                firstName={personData.firstName}
                lastName={personData.lastName}
                toxicTraits={personData.toxicTraits}
          />
          </div>
        
      </Box> */}
    </div>
  );
}

export default ToxicTraitsPage;

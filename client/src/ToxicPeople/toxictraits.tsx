// prettier-ignore
import React from 'react';
import './toxicpeople.css';
import { Box, Button, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Header from './header';
import {useState, useEffect} from 'react';
import ListingCard from './listingcards';
import { useSearchParams } from 'react-router-dom';





function ToxicTraitsPage() {
  const [searchParams] = useSearchParams();
  const person_id = searchParams.get('id');

  const [personData, setPersonData] = useState({});

  useEffect(() => {
    fetch(`'http://localhost:4000/api/toxic/'${person_id}`)
      .then(res => res.json())
      .then(resJson => setPersonData(resJson));
  }, [person_id]);
  
  console.log(`'http://localhost:4000/api/toxic/'${person_id}`);
  console.log(personData);

  return (
    <div className="r">
      <Header />
      <h1>{person_id}</h1>
      <h1>{personData.firstName}</h1>
      {/* <Box sx={{ padding: '0 80px' }}>
        <div className='personalinfoWrapper'
          style={{display: 'flex', justifyContent: 'space-around'}}>
            <h1>Toxic Person! </h1>
            <ListingCard
                person_id={person_id}
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

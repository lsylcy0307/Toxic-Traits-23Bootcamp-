// prettier-ignore

import React, { useState } from 'react';
import { Link, TextField, Grid, Typography } from '@mui/material';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { postData } from '../util/api';
import FormCol from '../components/form/FormCol';
import PrimaryButton from '../components/buttons/PrimaryButton';
import ScreenGrid from '../components/ScreenGrid';
import FormRow from '../components/form/FormRow';
import FormGrid from '../components/form/FormGrid';

function RegisterToxicPage() {
  const navigate = useNavigate();

  // Default values for state
  const defaultValues = {
    firstName: '',
    lastName: '',
    //   pictureUrl: '',
    toxicTraits: '',
  };

  type ValueType = keyof typeof values;

  // State values and hooks
  const [values, setValueState] = useState(defaultValues);

  // Helper functions for changing only one field in a state object
  const setValue = (field: string, value: string) => {
    setValueState((prevState) => ({
      ...prevState,
      ...{ [field]: value },
    }));
  };

  async function handleSubmit() {
    const traits = values.toxicTraits.split(',');
    const res = await postData('toxic/register', {
      firstName: values.firstName,
      lastName: values.lastName,
      toxicTraits: traits,
    });
    if (res.error) {
      throw Error(res.error.message);
    }
    return res.data;
    // navigate('/');
  }

  const title = 'Add a Toxic Person';
  return (
    <ScreenGrid>
      <FormGrid>
        <FormCol>
          <Grid item container justifyContent="center">
            <Typography variant="h2">{title}</Typography>
          </Grid>
          <FormRow>
            <Grid item width=".5">
              <TextField
                fullWidth
                size="small"
                type="text"
                required
                label="First Name"
                value={values.firstName}
                onChange={(e) => setValue('firstName', e.target.value)}
              />
            </Grid>
            <Grid item width=".5">
              <TextField
                fullWidth
                size="small"
                type="text"
                required
                label="Last Name"
                value={values.lastName}
                onChange={(e) => setValue('lastName', e.target.value)}
              />
            </Grid>
          </FormRow>
          <FormRow>
            <Grid item width=".5">
              <TextField
                fullWidth
                size="small"
                type="text"
                required
                label="toxictraits"
                value={values.toxicTraits}
                onChange={(e) => setValue('toxicTraits', e.target.value)}
              />
            </Grid>
          </FormRow>
          <Grid item container justifyContent="center">
            <PrimaryButton
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              onClick={() => handleSubmit()}
            >
              Register this Toxic Person
            </PrimaryButton>
          </Grid>
          <FormRow>
            <Grid container justifyContent="center">
              <Link component={RouterLink} to="../">
                Back to Main
              </Link>
            </Grid>
          </FormRow>
        </FormCol>
      </FormGrid>
    </ScreenGrid>
  );
}

export default RegisterToxicPage;

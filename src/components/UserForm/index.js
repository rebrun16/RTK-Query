import React, { useEffect, useState } from 'react';
import {
  Container,
  CssBaseline,
  TextField,
  Avatar,
  Typography,
  Button,
  Grid,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import useStyle from './style';

import {
  useGetUserQuery,
  useEditUserMutation,
  useAddUserMutation,
} from '../../redux/usersApi';

const UserForm = () => {
  const classes = useStyle();

  const [fields, setFields] = useState();
  const [isSkip, setIsSkip] = useState(true);

  const navigate = useNavigate();
  const params = useParams();
  const { id: userId } = params;

  const { data, isLoading } = useGetUserQuery(userId, { skip: isSkip });

  const [editUser] = useEditUserMutation();
  const [addUser] = useAddUserMutation();

  useEffect(() => {
    if (userId) {
      setIsSkip(false);
      setFields(data);
    }
  }, [userId, data]);

  const onChange = ({ target }) => {
    const { name, value } = target;
    setFields({ ...fields, [name]: value });
  };

  const onSubmit = async () => {
    if (userId) {
      await editUser(fields);
    } else {
      await addUser(fields);
    }

    navigate(-1);
  };

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component="h1" variant="h5">
          Create new user
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} className={classes.inputWrap}>
              <TextField
                name="first_name"
                variant="outlined"
                fullWidth
                label="First Name"
                value={fields?.first_name || ''}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.inputWrap}>
              <TextField
                name="last_name"
                variant="outlined"
                fullWidth
                label="Last Name"
                value={fields?.last_name || ''}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} className={classes.inputWrap}>
              <TextField
                name="email"
                variant="outlined"
                fullWidth
                label="Email Address"
                value={fields?.email || ''}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} className={classes.inputWrap}>
              <TextField
                name="phone"
                variant="outlined"
                fullWidth
                label="Phone"
                value={fields?.phone || ''}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.inputWrap}>
              <TextField
                name="company"
                variant="outlined"
                required
                fullWidth
                label="Company"
                value={fields?.company || ''}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.inputWrap}>
              <TextField
                name="job"
                variant="outlined"
                fullWidth
                label="Position"
                value={fields?.job || ''}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.inputWrap}>
              <TextField
                name="country"
                variant="outlined"
                fullWidth
                label="Country"
                value={fields?.country || ''}
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.inputWrap}>
              <TextField
                name="city"
                variant="outlined"
                fullWidth
                label="City"
                value={fields?.city || ''}
                onChange={onChange}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={onSubmit}
          >
            Save
          </Button>
        </form>
        <Button
          className={classes.backBtn}
          variant="contained"
          onClick={() => navigate(-1)}
        >
          <ArrowRightAltIcon /> Back to list
        </Button>
      </div>
    </Container>
  );
};

export default UserForm;

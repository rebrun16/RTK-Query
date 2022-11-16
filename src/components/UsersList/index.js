import React, { useState } from 'react';
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Typography,
  Button,
  ButtonGroup,
  Grid,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

import useStyle from './style';
import { LIMITS } from '../../helpers/utils';

import {
  useGetAllUsersQuery,
  useDeleteUserMutation,
} from '../../redux/usersApi';

const UsersList = () => {
  const classes = useStyle();

  const navigate = useNavigate();

  const [limit, setLimit] = useState('');

  const { data, isLoading, isError } = useGetAllUsersQuery(limit, {
    pollingInterval: 5000,
  });
  const [deleteUser] = useDeleteUserMutation();

  const handleDeleteUser = async (id) => {
    await deleteUser(id);
  };

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error...</h2>;

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <ButtonGroup
          variant="contained"
          sx={{ margin: '10px auto' }}
          className={classes.btnWrapper}
        >
          {LIMITS.map((item) => (
            <Button
              key={item.id}
              className={limit === item.count ? classes.active : ''}
              onClick={() => setLimit(item.count)}
            >
              {item.id}
            </Button>
          ))}
        </ButtonGroup>
        <Button onClick={() => navigate('/new')}>Add new</Button>
      </Grid>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {data.map((user) => (
          <React.Fragment key={user.id}>
            <ListItem
              className={classes.listItem}
              secondaryAction={
                <>
                  <IconButton
                    edge="end"
                    onClick={() => navigate(`users/${user.id}`)}
                  >
                    <InfoIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    onClick={() => navigate(`edit/${user.id}`)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemAvatar>
                <div className={classes.avatarWrap}>
                  {user.first_name.slice(0, 1)}
                  {user.last_name.slice(0, 1)}
                </div>
              </ListItemAvatar>
              <ListItemText
                primary={`${user.first_name} ${user.last_name}`}
                secondary={
                  <>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {user.job}
                    </Typography>
                    {' at '}
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {user.company}
                    </Typography>
                  </>
                }
              />
              <IconButton></IconButton>
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </>
  );
};

export default UsersList;

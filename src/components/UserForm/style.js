import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  paper: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& button': {
      marginTop: '10px !important',
      backgroundColor: '#3c7465 !important',
      '& svg': {
        transform: 'rotate(180deg)',
      },
      '&:hover': {
        backgroundColor: '#1f3c35 !important',
      },
    },
  },
  avatar: {
    margin: 5,
    background: '#3c7465',
  },
  form: {
    width: '100%',
    marginTop: 10,
  },
  inputWrap: {
    '& div.Mui-focused': {
      border: '1px solid #3c7465',
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
      },
    },
    '& label': {
      background: 'white',
      '&.Mui-focused': {
        color: '#3c7465',
      },
    },
  },
});

export default useStyles;

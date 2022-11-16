import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  active: {
    backgroundColor: '#1f3c35 !important',
  },
  listItem: {
    alignItems: 'center',
    '& .MuiIconButton-root': {
      margin: 2,
      '& path': {
        color: '#3c7465',
      },
    },
  },
  avatarWrap: {
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid darkcyan',
    borderRadius: '50%',
    background: 'lightyellow',
  },
  btnWrapper: {
    '& button': {
      backgroundColor: '#3c7465',
      '&:hover': {
        backgroundColor: '#1f3c35',
      },
      '&.MuiButtonGroup-grouped:not(:last-of-type)': {
        borderColor: 'white',
      },
    },
  },
});

export default useStyles;

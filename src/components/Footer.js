import React from 'react';
import { Box, Typography} from '@mui/material';
import useStyles from '../styles/styles';

const Footer = () => {
  const date = new Date().getFullYear();
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.footerContainer}>
      {/* <Typography className={classes.footerText}>
        Provided by{' '}
        
      </Typography> */}
      <Typography className={classes.footerDate}>Company Name - 2023</Typography>
    </Box>
  );
};

export default Footer;
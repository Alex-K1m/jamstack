import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { string } from 'prop-types';
import React from 'react';

import Link from './SmartLink';

const useTheme = makeStyles({
  toolbar: {
    padding: 0,
  },
});

const Header = ({ siteTitle = '', maxWidth }) => {
  const cls = useTheme();

  return (
    <AppBar component='header' position='static'>
      <Container maxWidth={maxWidth}>
        <Toolbar className={cls.toolbar}>
          <Typography variant='h6' component='h1' id='back-to-top-anchor'>
            <Link to='/' color='inherit'>
              {siteTitle}
            </Link>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

Header.propTypes = {
  siteTitle: string,
  maxWidth: string.isRequired,
};

export default Header;

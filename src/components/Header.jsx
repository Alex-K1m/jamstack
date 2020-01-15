import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';

const useTheme = makeStyles({
  toolbar: {
    padding: 0,
  },
});

const Header = ({ siteTitle }) => {
  const cls = useTheme();

  return (
    <AppBar component='header' position='static'>
      <Container>
        <Toolbar className={cls.toolbar}>
          <Typography variant='h6' component='h1'>
            {siteTitle}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
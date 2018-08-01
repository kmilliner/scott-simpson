import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Provider } from 'rebass';
import theme from '../theme/theme';
import normalize from '../theme/normalize';
import Transition from '../components/Transition';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const TemplateWrapper = ({ children }) => {
  normalize();
  return(
    <Provider theme={theme}>
      <Helmet>
        <title>Scott Simpson</title>
        <link rel="stylesheet" href="https://use.typekit.net/iza8kcn.css" />
      </Helmet>
      <Nav />
      <main role="main">{children()}</main>
      <Footer />
    </Provider>
  );
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;

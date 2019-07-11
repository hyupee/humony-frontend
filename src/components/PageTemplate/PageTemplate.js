import React from 'react';
import Header from '../Header';
import propTypes from 'prop-types';

const PageTemplate = ({ children }) => {
  return (
    <div className="page-template">
      <Header />
      <main>{children}</main>
    </div>
  );
};

PageTemplate.propTypes = {
  children: propTypes.element.isRequired,
};


export default PageTemplate;
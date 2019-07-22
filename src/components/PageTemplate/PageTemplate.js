import React from 'react';
import Header from '../Header';

const PageTemplate = ({ children }) => {
  return (
    <div className="page-template">
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
};

export default PageTemplate;
import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const VhSection = styled.section`
  width: 100%;
  height: 100vh;

  &:nth-child(even) {
    background: #f7f7f7;
  }

  &:nth-child(odd) {
    background: #ffffff;
  }
`;

const Section = ({ children }) => {
  return (
    <VhSection>
      <div className="container">
        {children}
      </div>
    </VhSection>
  );
};

Section.propTypes = {
  children: propTypes.element.isRequired
};

export default Section;
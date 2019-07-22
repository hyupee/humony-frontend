import React from 'react';
import styled from 'styled-components';
import './Section.scss';

const VhSection = styled.section`
  width: 100%;
  height: 100vh;
`;

export const Section1 = ({ children }) => {
  return (
    <VhSection id="section_1">
      {children}
    </VhSection>
  );
};

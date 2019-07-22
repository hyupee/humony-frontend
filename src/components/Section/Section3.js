import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import './Section.scss';

const VhSection = styled.section`
  width: 100%;
  height: 100vh;
`;

export const Section3 = ({ children }) => {
  return (
    <section id="section_3">
      <Container maxWidth="md">
        {children || ''}
      </Container>
    </section>
  );
};

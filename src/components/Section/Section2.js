import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import './Section.scss';

const VhSection = styled.section`
  width: 100%;
  height: 100vh;
`;

export const Section2 = ({ children }) => {
  return (
    <section id="section_2">
      <Container maxWidth="md">
        {children || ''}
      </Container>
    </section>
  );
};

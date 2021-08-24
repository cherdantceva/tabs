import React from 'react';
import styled from 'styled-components';
import TabsComponent from '../../components/TabsComponent';

const Main = styled.div`
`;
const Body = styled.div`
  height: 400px;
  background: white;
`;

const MainPage = () => (
  <Main>
    <TabsComponent />
    <Body />
  </Main>
);

export default MainPage;

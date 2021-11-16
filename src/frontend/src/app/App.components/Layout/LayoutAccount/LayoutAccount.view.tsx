import { MainFooter } from 'app/App.components/MainFooter/MainFooter.controller';
import * as React from 'react';
import { Header } from '../../Header/Header.controller';
import { MainContainer, Wrapp } from './LayoutAccount.style';

export const LayoutAccountView = ({ children }: any) => {
  return (
    <Wrapp>
      <Header accountPage authPage />
      <MainContainer>
        {children}
      </MainContainer>
      <MainFooter />
    </Wrapp>
  );
};

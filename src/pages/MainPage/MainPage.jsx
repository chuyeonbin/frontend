import React, { useEffect } from 'react';
import JumboTron from './JumboTron/JumboTron';
import CardList from '../../components/CardList/CardList';
import * as S from './style';
import { useSelector } from 'react-redux';

const MainPage = () => {
  const user = useSelector(state => state.user);
  useEffect(() => {
    console.log(user);
  });
  return (
    <>
      <JumboTron />
      <S.MainPage title="같이먹자">
        <CardList />
      </S.MainPage>
    </>
  );
};

export default MainPage;

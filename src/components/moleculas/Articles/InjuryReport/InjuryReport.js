import React from 'react';
import styled from 'styled-components';

const data = {
  category: 'injury report',
  dataPublished: '4 febuary 2022',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros mauris, ultricies a magna sit amet, tempus luctus nunc. Suspendisse placerat quam eget porttitor convallis. Nulla blandit tristique.',
};

const WrapperArticle = styled.div``;
const HeaderArticle = styled.div``;
const HeaderArticleInfo = styled.div``;
const DataPublished = styled.span``;
const Category = styled.span``;
const Info = styled.p``;

export const InjuryReport = () => {
  return (
    <WrapperArticle>
      <HeaderArticle>
        {/* <img src="../../../../src/images/Arenal-header-photo.jpeg" /> */}
        <HeaderArticleInfo>
          <DataPublished>{data.dataPublished}</DataPublished>
          <Category>{data.category}</Category>
          <Info>{data.text}</Info>
        </HeaderArticleInfo>
      </HeaderArticle>
    </WrapperArticle>
  );
};

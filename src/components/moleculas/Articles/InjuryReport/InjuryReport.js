import React from 'react';
import { WrapperArticle, HeaderArticle, HeaderArticleInfo, DataPublished, Category, Info, ShowMoreButton } from './InjuryReport.styles';
import { ReactComponent as SvgIcon } from '../../../../assets/images/icon/showmore-arrow.svg';

const data = {
  category: 'injury report',
  dataPublished: '4 febuary 2022',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros mauris, ultricies a magna sit amet, tempus luctus nunc. Suspendisse placerat quam eget porttitor convallis. Nulla blandit tristique.',
};

export const InjuryReport = () => {
  return (
    <WrapperArticle>
      <HeaderArticle>
        <img src="https://github.com/Dzejkoo/fs-players-card/blob/main/src/assets/images/Aresnal-header-photo.jpeg?raw=true" />
        <HeaderArticleInfo>
          <DataPublished>{data.dataPublished}</DataPublished>
          <Category>{data.category}</Category>
          <Info>{data.text}</Info>
          <ShowMoreButton>
            <SvgIcon />
          </ShowMoreButton>
        </HeaderArticleInfo>
      </HeaderArticle>
    </WrapperArticle>
  );
};

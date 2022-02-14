import React from 'react';
import { WrapperArticle, HeaderArticle, HeaderArticleInfo, DataPublished, Category, Info, ShowMoreButton } from './InjuryReport.styles';
import { ReactComponent as SvgIcon } from '../../../../assets/images/icon/showmore-arrow.svg';
import useCollapse from 'react-collapsed';
import styled from 'styled-components';

const data = {
  category: 'injury report',
  dataPublished: '4 febuary 2022',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros mauris, ultricies a magna sit amet, tempus luctus nunc. Suspendisse placerat quam eget porttitor convallis. Nulla blandit tristique.',
};

const WrapperContent = styled.div``;

export const InjuryReport = () => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  return (
    <WrapperArticle>
      <HeaderArticle>
        <img src="https://github.com/Dzejkoo/fs-players-card/blob/main/src/assets/images/Aresnal-header-photo.jpeg?raw=true" />
        <HeaderArticleInfo>
          <DataPublished>{data.dataPublished}</DataPublished>
          <Category>{data.category}</Category>
          <Info>{data.text}</Info>
          <ShowMoreButton {...getToggleProps()}>
            <SvgIcon className={isExpanded ? 'active' : null} />
          </ShowMoreButton>
          <WrapperContent {...getCollapseProps()}>
            <div className="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros mauris, ultricies a magna sit amet, tempus luctus nunc. Suspendisse
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros mauris, ultricies a magna sit amet, tempus luctus nunc.
              Suspendisse placerat quam eget porttitor convallis. Nulla blandit tristique.', placerat quam eget porttitor convallis. Nulla blandit
              text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros mauris, ultricies a magna sit amet, tempus luctus nunc.
              Suspendisse placerat quam eget porttitor convallis. Nulla blandit tristique.', tristique.
            </div>
          </WrapperContent>
        </HeaderArticleInfo>
      </HeaderArticle>
    </WrapperArticle>
  );
};

import React from 'react';

import StickyBox from 'react-sticky-box';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion name="Elon Musk" nickname="@elonmusk" />,
              <FollowSuggestion name="Rocketseat" nickname="@rocketseat" />,
              <FollowSuggestion
                name="Guilherme Rodz"
                nickname="@guilherme_rodz"
              />,
            ]}
          />

          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />, <News />, <News />]}
          />

          <List
            title="Talvez você curta"
            elements={[<News />, <News />, <News />, <News />, <News />]}
          />

          <List
            title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
              <News />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default Sidebar;

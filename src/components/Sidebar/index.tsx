import React from 'react';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

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
          elements={[
            <h1>teste</h1>,
            <h1>teste</h1>,
            <h1>teste</h1>,
            <h1>teste</h1>,
            <h1>teste</h1>,
          ]}
        />
      </Body>
    </Container>
  );
};

export default Sidebar;

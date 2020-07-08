import React from 'react';

import AppText from '../AppText/AppText';
import {
  AuthorContainer,
  Container,
  ImageContainer,
  ImageItem,
  DetailsContainer,
} from './ListItemStyles';
import { colors } from '../../config/colors';

export default function ListItem({ imageUrl, title, authors }) {
  const renderItems = (items) => {
    if (items) {
      const itemsCount = items.length - 1;
      return items.map((item, index) => {
        return (
          <AppText
            key={index}
            title={itemsCount != index ? item + ',' : item}
            marginRight="5"
            color={colors['mid-black']}
          />
        );
      });
    }
    return null;
  };

  return (
    <Container>
      <ImageContainer>
        <ImageItem source={{ uri: imageUrl }} />
      </ImageContainer>
      <DetailsContainer>
        <AppText title={title} size="20" numberOfLines={2} />
        <AuthorContainer>{renderItems(authors)}</AuthorContainer>
      </DetailsContainer>
    </Container>
  );
}

import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListView,
  ScrollView,
  Text,
  View,
} from 'react-native';

import AppText from '../../components/AppText/AppText';
import booksApi from '../../api/books';
import { colors } from '../../config/colors';
import { Container, LoadingSpinner } from './BooksScreenStyles';
import ItemSeparator from '../../components/ItemSeparator/itemSeparator';
import ListItem from '../../components/ListItem/ListItem';
import useApi from '../../hooks/useApi';

export default function BooksScreen() {
  const { data: books, error, loading, request: loadBooks } = useApi(
    booksApi.getBooks
  );

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <Container>
      <LoadingSpinner animating={loading} color={colors['mid-black']} />
      <FlatList
        data={books}
        renderItem={({ item }) => {
          return (
            <ListItem
              id={item.id}
              title={item.volumeInfo.title}
              authors={item.volumeInfo.authors}
              imageUrl={item.volumeInfo.imageLinks.thumbnail}
            />
          );
        }}
        ItemSeparatorComponent={() => <ItemSeparator />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}

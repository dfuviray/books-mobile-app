import React, { useEffect } from 'react';
import { View, Text, FlatList, ListView, ScrollView } from 'react-native';

import AppText from '../../components/AppText/AppText';
import booksApi from '../../api/books';
import { Container } from './BooksScreenStyles';
import ItemSeparator from '../../components/ItemSeparator/itemSeparator';
import ListItem from '../../components/ListItem/ListItem';
import useApi from '../../hooks/useApi';

export default function BooksScreen() {
  const { data: books, error, request: loadBooks } = useApi(booksApi.getBooks);

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <Container>
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

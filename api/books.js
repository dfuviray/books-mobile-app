import client from './client';

const endpoint = '/books/v1/volumes?q=javascript&startIndex=0&maxResults=10';

const getBooks = () => client.get(endpoint);

export default {
  getBooks,
};

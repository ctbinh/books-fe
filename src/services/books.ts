import { server, invoke } from './common';

export const booksService = {
  getList: () => invoke(server.get('/books')),
  create: (data: CreateBookData) => invoke(server.post('/books', data)),
};

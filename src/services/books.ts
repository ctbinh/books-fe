import { server, invoke } from './common';

export const booksService = {
  getList: (from: number, size: number) => invoke(server.get(`/books?from=${from}&size=${size}`)),
  getById: (bookId: string) => invoke(server.get(`/books/${bookId}`)),
  create: (data: CreateBookData) => invoke(server.post('/books', data)),
  update: (bookId: string, data: CreateBookData) => invoke(server.put(`/books/${bookId}`, data)),
};

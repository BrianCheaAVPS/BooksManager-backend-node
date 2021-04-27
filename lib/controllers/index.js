import express          from 'express';
import Books            from './books';

export const RootController             = { route: '/',             controller: express.Router().get('/', (req, res) => res.send('HOME'))};
export const BooksController            = { route: '/books',        controller: Books}
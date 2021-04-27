import express                        from 'express';
import * as booksControllerFuncs   from './funcs'
import * as restUtils                 from '../../utils/rest-utils'

const booksController = express.Router();
const $result = restUtils.$result;
const getBook = booksControllerFuncs.getBook

//Getting all
booksController.get('/',                $result(booksControllerFuncs.onGetAllBooks))

//Getting one
booksController.get('/:id', getBook,    $result(booksControllerFuncs.onGetBook))

//Creating one
booksController.post('/',               $result(booksControllerFuncs.onPostBook))

//Updating one
booksController.patch('/:id', getBook,  $result(booksControllerFuncs.onUpdateBook))

//Deleting one
booksController.delete('/:id', getBook, $result(booksControllerFuncs.onDeleteBook))



export default booksController
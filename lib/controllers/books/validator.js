import _ from 'lodash'
import booksController from '.'
import bookProps from '../../enums/book-props'
export default isValidBook = (book) => {
    //Check for null book
    if (!book || typeof book !== 'object') {
        return false
    }

    //Check if object has all of the right keys
    Object.keys(book).forEach(key => {
        if (!bookProps.hasOwnProperty(key)) {
            return false;
        }
        //Ensure each key has a value
        if (!book[key] && book[key] !== 0) {
            return false;
        }
    })
    return true;
}
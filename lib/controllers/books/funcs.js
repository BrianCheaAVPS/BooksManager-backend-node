// import isValidBook from './validator'
import Book from '../../models/book'

export const onGetAllBooks = async (req, response) =>
{
    try {
        const books = await Book.find()
        response.json(books)
    } catch(e) {
        //500 error means the database failed, request was fine
        response.status(500).json({ message: e.message })
    }
}

export const onGetBook = async (req, response) => {
    try {
        const {title, author, price, tech} = response.book
        const book = {
            title,
            author,
            price,
            tech
        }
        response.status(200).json()
    } catch(e) { response.status(500).json({ message: e.message })}
}

export const onPostBook = async (req, response) => {
    console.log('Posting Book with following params', req.body)
    const {title, author, price, tech} = req.body;
    const book = new Book({
        title, author, price, tech,
    });

    try 
    {
        const newBook = await book.save();
        //201 means post was successful
        response.status(201).json(newBook)
    }
    //400 means user error
    catch(e) { response.status(400).json({ message: e.message })}
}

export const onUpdateBook = async (req, response) => {
    const {title, author, price, tech} = req.body;
    const newData = {title, author, price, tech};
    Object.keys(newData).forEach(key => {
        //if the key is new data input by user, update the response object
        if(newData[key] || newData[key] === 0) {
            response.book[key] = newData[key];
        }
    })
    try {
        const updatedBook = await response.book.save();
        response.status(201).json(updatedBook)
    } catch(e) {response.status(400).json({message: e.message})}
}

export const onDeleteBook = async (req, response) => {
    try {
        await response.book.remove()
        response.json({message: `Deleted Book: ${response.book.title} by ${response.book.author}`})
    } catch (e) {response.status(500).json({message: e.message})}
}

export const getBook = async (req, response, next) => {
    let book = undefined;
    try {
        book = await Book.findById(req.params.id)
        if (book === null) {
            return response.status(404).json({message: 'Cannot find book'})
        }
    } catch(e) { response.status(500).json({ message: e.message })}

    response.book = book;
    next()
}
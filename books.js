const express = require('express')
const router = express.Router()
const cors = require('cors')

const connectToDataBase = require('./db')
connectToDataBase()

const app = express()
app.use(express.json())
app.use(cors())

const port = 3333

const Book = require('./bookModel')

async function getBooks(request, response){
    try {
        const getBooksInDataBase = await Book.find()

        response.json(getBooksInDataBase)
    } catch(error){
        console.log(error)
    }
}

async function createBook(request, response){
    const NewBook = new Book({
        author: request.body.author,
        title: request.body.title,
        pages: request.body.pages,
        year: request.body.year,
        publisher: request.body.publisher,
        category: request.body.category,
        image: request.body.image
    })
    
    try {
        const createdBook = await NewBook.save()

        response.status(201).json(createdBook)
    } catch (error) {
        console.log(error)
    }
}

async function updateBook(request, response){
    try {

        const foundBook = await Book.findById(request.params.id)

    if(request.body.author){
        foundBook.author = request.body.author
    }

    if(request.body.title){
        foundBook.title = request.body.title
    }

    if(request.body.pages){
        foundBook.pages = request.body.pages
    }

    if(request.body.year){
        foundBook.year = request.body.year
    }

    if(request.body.publisher){
        foundBook.publisher = request.body.publisher
    }

    if(request.body.category){
        foundBook.category = request.body.category
    }

    if(request.body.image){
        foundBook.image = request.body.image
    }


    const updateBookOnDB = await foundBook.save()

    response.json(updateBookOnDB)
        
    } catch (error) {
        console.log(error)
    }
       
}

async function deleteBook(request, response){
    try {
        await Book.findByIdAndDelete(request.params.id)

        response.json({ message: 'Deleted book sucessfully.'})
    } catch (error) {
        console.log(error)        
    }
}

function showPort(){
    console.log('Server is running on port', port)
}

app.use(router.get('/books', getBooks))
app.use(router.post('/books', createBook))
app.use(router.patch('/books/:id', updateBook))
app.use(router.delete('/books/:id', deleteBook))


app.listen(port, showPort)
const booksTable = require('../models/book.model')
const authorsTable = require('../models/author.model')
const db = require('../db')
const { eq , ilike} = require("drizzle-orm")

exports.getAllBooks = async function(req, res) {

    const books = await db.select().from(booksTable)
    return res.json(books)
}

exports.getBookById = async function(req , res){
    const id = req.params.id

    const books = await db
        .select()
        .from(booksTable)
        .where(eq(booksTable.id, id))
        .leftJoin(authorsTable , eq(booksTable.authorId , authorsTable.id))
        .limit(1)

    const book = books[0]
    if(!book){
        return res
            .status(404)
            .json({error : `book with id ${id} doesnt exist`})
    }
    return res.json(book)
}

exports.createBook = async function (req , res ){
    const {title , authorId , description } = req.body;
        if(!title || title === '')
            return res.status(400).json({message: 'Title is required'});
        
        const result = await db
            .insert(booksTable)
            .values({
                title,
                authorId,
                description,
            })
        return res.status(201).json({message: 'Book created successfully'});
}

exports.deleteBookById = async function (req , res ){
    const id = req.params.id
    await db.delete(booksTable).where(eq(booksTable.id , id))
    
    return res.status(200).json({message: 'Book deleted successfully'});
}
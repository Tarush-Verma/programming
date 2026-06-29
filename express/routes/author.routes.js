const express = require('express');
const authorTable = require("../models/author.model")
const booksTable = require("../models/book.model")
const db = require("../db")
const router = express.Router();
const {eq} = require("drizzle-orm");
const { authorsTable } = require('../models');

router.get("/" , async (req , res) => {
    const authors = await db.select().from(authorTable)
    return res.json(authors)
})

router.get("/:id" , async(req , res) => {
    const author = await db
        .select()
        .from(authorsTable)
        .where(eq(authorsTable.id , req.params.id))
    
    if(!author){
        return res.status(404).json({error: `author doesnt exist `})
    }

    return res.json(author)

})

router.post("/" , async(req , res) => {
    const {firstName , lastName , email} = req.body

    const result = await db
        .insert(authorTable)
        .values({
            firstName,
            lastName,
            email,
        })
        .returning()

    return res.json({message: "author has been created" , id : result[0].id})
})

router.get("/:id/books" , async(req , res) => {
    const books = await db
        .select()
        .from(booksTable)
        .where(eq(booksTable.authorId , req.params.id))

    return res.json(books)
})

module.exports = router;

require("dotenv/config")
const express = require('express');
const app = express();
const PORT = 8000;

const bookRouter = require('./routes/book.routes')
const authorRouter = require("./routes/author.routes")
const {loggingMiddleware} = require('./middlewares/logger')

//middleware(plugins)
app.use(express.json())
app.use(loggingMiddleware)





// routes
app.use('/books' , bookRouter)
app.use("/authors" , authorRouter)



app.listen(PORT , ()  => console.log(`Server is running on port ${PORT}`));
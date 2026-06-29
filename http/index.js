const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req , res){
    const method = req.method
    const path = req.url

    const log = `\n$[${Date.now()}]: ${method} ${path}`
    fs.appendFileSync("log.txt" , log , "utf-8")

    switch (method) {
        case "GET": {
            switch (path) {
                case "/":
                    return res.writeHead(200).end("hello from server")
                
                case "/contact":
                    return res.writeHead(200).end("Contact us atdwd")
                
                case "/tweet" :
                    return res.writeHead(200).end("tweet 1 \n tweet 2")
            }
        }
        break
        case "POST": {
            switch (path){
                case "/tweet":
                    return res.writeHead(201).end("you created your tweet ")
            }
        }

        
    }

    return res.writeHead(404).end("Not Found")

    
})

server.listen(8000 , () => console.log("server is running on port 8000"))
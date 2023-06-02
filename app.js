const http = require("node:http")
const fs = require("node:fs/promises")

const server = http.createServer(async (req,res)=>{
    if(req.url == "/send"){
        const buffer = await fs.readFile("text.txt")
    res.writeHead(200,{"content-Type":"text/plain"})
    res.end(buffer.toString("utf8"))
    }
    else{
        res.end("not send")
    }
})

server.listen(3000, ()=>{
    console.log("server running")
})

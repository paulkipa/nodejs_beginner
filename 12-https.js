const http=require('http')

const server=http.createServer(
(req,res)=>{
    if (req.url==='/') {
        res.end('welcome to ou home landig page')
        return
    }
    if (req.url==='/about') {
        res.end('Here is our short history')
        return
    }
    res.end(
        `<h1>Oops!</h1>
        <p>We can't find the page you are looking for
        <a href="/"> Back To Home Page</a>`
    )
})

server.listen(5000)
const express = require('express')//express import.
const app = express()
const port = 4000 //port set to 4000


const cors = require('cors');//cors
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});
//allows the HTTP request - error was shown in console on chrome.




const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());//body parser installed using the cmd line npm install body-parser.

// getting-started.js
const mongoose = require('mongoose');//mongoose import

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.hz2nopg.mongodb.net/?retryWrites=true&w=majority');//connect - replaced with my login details.

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const bookSchema = new mongoose.Schema({
  title:String,
  cover:String,
  author:String
});//bookschema written, grabbed from mongoose getting started page.


const bookModel = mongoose.model('books', bookSchema);//bookmodel assigned to book schema.

app.post('/api/book',(req,res) =>{
console.log(req.body);//data logged to console.
bookModel.create({
  title:req.body.title,
  cover:req.body.cover,
  author:req.body.author
})//creates new book, title, cover & author. - will be shown in the database.
.then(() =>{res.send("Book Created")})
.catch(() =>{res.send("Book Not Created")})

})

app.get('/', (req, res) => {//Server sits and listens for request - / call back function.
  res.send('Hello World!')//hello world response.
})//test1

//server listens for HTTP put method
app.put('/api/book/:id', async(req, res) =>{
  console.log("updating URL."+request.params.id);
  let book = await bookModel.findByIdAndUpdate(req.params.id, req.body,{new:true});//allows you to replace the data of the book (title author cover)
  res.send(book);//response with book details.
})

app.get('/api/books', async (req, res) =>{
    //removed hard coded array.
    let books = await bookModel.find({}); //books = everything that comes from db.
    res.json(books)//response. - when going to localhost:4000/api/books will return all the books in my mongo db.
        
    })

    app.get('/api/book/:id',async (req, res)=>{
      console.log(req.params.id);
    book = await bookModel.findById({_id:req.params.id})
    res.send(book);//can query the db to find a certain book by ID.
    })

 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) //node server.js in terminal will give this response.
})//code gathered from expressjs.com or from lab 5
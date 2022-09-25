const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = 5000;
let books = [
    {
        "id" : 1,
        "name" : "Opal",
        "description" : "novel",
        "publishedAt" : 2019,
        "authorName" : "Hanan Lashin"

    },
    {
        "id" : 2,
        "name" : "Anthristos",
        "description" : "novel",
        "publishedAt" : 2021,
        "authorName" : "Ahmed Khaled"

    }
]
app.use(bodyParser.json());

// get
app.get("/saved", (req, res) => {
    res.status(200).json({
        message:"All Books",
        data: books,
    })
})
// post
app.post("/added", (req, res) => {
    const { name, description, publishedAt, authorName } = req.body;
    let id = books.length + 1 
    if (!name && !description && !publishedAt && !authorName) {
        books.push({name, description, publishedAt, authorName, id});
        res.status(200).json({
            message:"added book successfully",
            data: books,
        })
    }
    res.status(400).json({
        message:"added book not successfully",
    })
})
// patch
app.patch("/books/:id", (req, res) => {
    const { name, description, publishedAt, authorName } = req.body;
    let id = req.params.id.slice(1);
    let valid = false;
    books.forEach((x) => {
        if (x.id === id) {
            valid = true
        }
    })
    if (!valid) {
        res.status(200).json({
            message:"book not found",
        });
    }
    for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            books[i].name === name
            books[i].description === description
            books[i].publishedAt === publishedAt
            books[i].authorName === authorName
        }
        
    }
    res.status(200).json({
        message:"delete not successfully",
        data: books,
    });
})
// delete
app.delete("/deleteBooks/:id", (req, res) => {
    let id = req.params.id.slice(1);
    let valid = false;
    books.forEach((x) => {
        if (x.id === id) {
            valid = true
        }
    })
    if (!valid) {
        res.status(200).json({
            message:"user not found",
        });
    }
    for (let i = 0; i < users.length; i++) {
        if (books[i].id === id) {
            books[i].pop()
        }
        
    }
    res.status(200).json({
        message:"delete not successfully",
        data: books,
    });
})

// server
app.listen(port, (req , res) => {
    console.log(`app listen at http://localhost:${port}`);
});

// const http = require('http')
// const server = http.createServer((req, res) => {
//     console.log(req.url)
//     if (req.url === '/') {
//         res.write('hello from home')
//     }else if (req.url !== '/') {
//         var string = req.url
//         var arr = string.split('/')
//         res.write('hello from ' + arr[1].toString())
//     }
//     res.end()
// })
// server.listen(3000)

const express = require("express")
// const bodyParser = require("body-parser")

// const app = express()

// let users = []
// app.use(bodyParser.json());
// app.post("/register", (req, res) => {
//     const { firstName, lastName} = req.body;
//     users.push({firstName, lastName});
//     res.status(200).json({
//         message:"register successfully",
//         data: users,
//     })
// })
// app.post("/login", (req, res) => {
//     const { firstName, lastName} = req.body;
//     for (let i = 0; i < users.length; i++) {
//         if(users.includes({firstName, lastName[i]})){
//             res.status(200).json({
//             message:"login successfully",
//         })
//         }else{
//             res.status(404).json({
//                 message:"login is not successfully",
//             })
//         }
//     }
    
// })
// app.listen(3000, (req , res) => {
//     console.log(`app listen at http://localhost:3000`);
// });




const bodyParser = require("body-parser")

const app = express()

let users = []
app.use(bodyParser.json());

app.post("/register", (req, res) => {
    const { firstName, lastName} = req.body;
    let id = users.length + 1 
    users.push({id, firstName, lastName});
    res.status(200).json({
        message:"register successfully",
        data: users,
    })
})
// patch
app.patch("/users/:id", (req, res) => {
    let id = req.params.id.slice(1);
    let newId = req.url.split(":")
    console.log(newId);
    const { firstName, lastName } = req.body;
    users.forEach((x) => {
        if (x.id === newId) {
            firstName === x.firstName
            lastName === x.lastName
            res.status(200).json({
                message:"change successfully"
            });
        }
    });
    res.status(400).json({
        message:"change not successfully"
    });
})

const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const port = 8000;
let users = []

app.use(bodyParser.json());
// register
app.post("/register", (req, res) => {
    const { firstName, password} = req.body;
    let id = users.length + 1 
    users.push({id, firstName, password});
    var arr = password.split('')
    var y = x = []
    str = '!":;@#$%^&*()<>?/\'\\|'.split('')
    // console.log(password);

    arr.forEach((a) => {
        if (a != parseFloat(a) && a == a.toUpperCase()) {
            x.push(true)
        } else {
            x.push(false)
        }
    });
    // console.log(x);

    str.forEach((a) => {
        if (password != parseFloat(password) && password.includes(a)) {
            y.push(true)
        } else {
            y.push(false)
        }
    })
    // console.log(y);

    if (password.length >= 8 && x.includes(true) && x.includes(false) && y.includes(true)) {
        res.status(200).json({
            message:"register successfully",
            data: users,
        })  
    }
    else {
        res.status(400).json({
            message:"register not successfully",
        })  
    }
    // console.log(typeof password)
})

// patch users
app.patch("/users/:id", (req, res) => {
    const { firstName, password } = req.body;
    let id = req.params.id.slice(1);
    let valid = false;
    users.forEach((x) => {
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
        if (users[i].id === id) {
            users[i].firstName = firstName;
            users[i].password = password
        }
    }
    res.status(200).json({
        message:"edit successfully",
        data: users,
    });
})
// delete users
app.patch("/users/:id", (req, res) => {
    let id = req.params.id.slice(1);
    let valid = false;
    users.forEach((x) => {
        if (x.id === id) {
            valid = true
        }
    })
    if (!valid) {
        res.status(400).json({
            message:"user not found",
        });
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users.pop(i)
        }
    }
    res.status(200).json({
        message:"delete users successfully",
        data: users,
    });
})
// login
app.post("/login", (req, res) => {
    const { firstName, password } = req.body;
    users.forEach((x) => {
        if (x.firstName === firstName && x.password === password) {
            res.status(200).json({
                message:"login successfully"
            });
        }
    });
    res.status(400).json({
        message:"login is not successfully"
    });
});
// server
app.listen(port, (req , res) => {
    console.log(`app listen at http://localhost:${port}`);
});

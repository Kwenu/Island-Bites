import mysql from "mysql";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import express from "express";


const salt = 10;

const app = express();
app.use(express.json());
app.use(cors({
    origin:["http://localhost:3000" , "http://localhost:3001" , "http://localhost:3002", "http://localhost:3003" , "http://localhost:3004", "http://localhost:3005", "http://localhost:3006" , "http://localhost:3007" ],
    methods: ["POST" , "GET" , "PUT" , "DELETE"],
    credentials: true
}));
app.use(cookieParser());


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"sdgp_islandbites"

});

app.post("/signup", (req, res) => {
    const sql =  "INSERT INTO users (`username`, `email`, `name`, `contactNum`, `country`, `password`, `coverPic`, `profilePic`) VALUES (?)";

    bcrypt.hash(req.body.password.toString() , salt,(err,hash) => {
        if(err) return res.json({Error: "Error for hassing password"});

        const values = [
            req.body.username,
            req.body.email,
            req.body.name,
            req.body.contactNum,
            req.body.country,
            hash,
            req.body.coverPic,
            req.body.profilePic,
        ]
        db.query(sql,[values] , (err,result)=>{
            if(err) return res.json({Error: "Inserting data error in server"});
            return res.json({status: "Success"});
        })

    })
} )

app.post("/login", (req,res) => { 
    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [req.body.email], (err,data) =>{
        if(err) return res.json({Error: "Login error in server"});
        if(data.length > 0) {
            bcrypt.compare(req.body.password.toString(),data[0].password, (err,response) => {
                if(err) return res.json({Error: "Password compare error"});
                if(response) {

                    const name = data[0].name;
                    const token = jwt.sign({name} , "jwt-secret-key",{expiresIn: '1d'});
                    res.cookie("token" , token);

                    return res.json({status: "Success"});
                }else{
                    return res.json({Error: "Password not matched"});
                }
            })

        }else{
            return res.json({Error: "No email existed"});
        }
    })
})

app.get("/logout" , (req,res) => {
    res.clearCookie("token");
    return res.json({status:"Success"});
})


/app.get("/recipes", (req,res)=>{

    const q = " SELECT * FROM recipes"
    db.query (q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })

})


app.get("/cards", (req,res)=>{
    const q = " SELECT * FROM recipes"
    db.query (q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })

})

app.post("/recipes", (req,res)=>{
    const q = "INSERT INTO recipes (ingredients,description,instructions,img,userId,createdAt) VALUES (?)";
    const values = [         
        req.body.ingredients,
        req.body.description,
        req.body.instructions,
        req.body.img,
        req.body.userId,
        req.body.createdAt,
];

    db.query(q,[values], (err,data)=>{
        if(err) return res.json(err);
        return res.json("Book has been created successfully..");
    });

});


app.get("/recipes/:id", (req, res) => {
    const recipeId = req.params.id;
    const sql = "SELECT * FROM recipes WHERE id = ?";
    db.query(sql, [recipeId], (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error fetching recipe details" });
        }
        if (data.length === 0) {
            return res.status(404).json({ error: "Recipe not found" });
        }
        return res.json(data[0]); // Return the details of the recipe
    });
});


// Add a new route to fetch user information by email
app.get("/user/:email", (req, res) => {
    const userEmail = req.params.email;
    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [userEmail], (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error fetching user information" });
        }
        if (data.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.json(data[0]); // Return the user information
    });
});


// In index.js

app.get("/myrecipes", (req, res) => {
    const userEmail = req.query.email; // Get user's email from the query string
    const sql = "SELECT * FROM recipes WHERE userId IN (SELECT id FROM users WHERE email = ?)";
    db.query(sql, [userEmail], (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error fetching user's recipes" });
        }
        return res.json(data); // Return the recipes belonging to the user
    });
});



// In index.js


// Add a new route to handle recipe deletion
app.delete("/recipes/:id", (req, res) => {
    const recipeId = req.params.id;
    const sql = "DELETE FROM recipes WHERE id = ?";
    db.query(sql, [recipeId], (err, result) => {
        if (err) {
            console.error("Error deleting recipe:", err);
            return res.status(500).json({ error: "Error deleting recipe" });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Recipe not found" });
        }
        return res.json({ status: "Success" }); // Send success response upon successful deletion
    });
});


app.put("/recipes/:id", (req, res) => {
    const recipeId = req.params.id;
    const sql = "UPDATE recipes SET `ingredients`= ?, `description`= ?, `instructions`= ?, `img`= ?, `userId`= ?, `createdAt`= ? WHERE id = ?";

    const values = [         
        req.body.ingredients,
        req.body.description,
        req.body.instructions,
        req.body.img,
        req.body.userId,
        req.body.createdAt,
];

    db.query(sql, [...values,recipeId], (err, result) => {
        if (err) {
            console.error("Error updating recipe:", err);
            return res.status(500).json({ error: "Error updating recipe" });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Recipe not found" });
        }
        return res.json({ status: "Success" }); // Send success response upon successful deletion
    });
});



app.listen(8800, ()=>{
    console.log("Connected to backend!");
})



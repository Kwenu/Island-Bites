import express, { response }  from "express";
import mysql from "mysql";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";

const salt = 10;

const app = express();
app.use(express.json());
app.use(cors({
    origin:["http://localhost:3001","http://localhost:3002","http://localhost:3003","http://localhost:3004","http://localhost:3003","http://localhost:3004","http://localhost:3005","http://localhost:3006","http://localhost:3007","http://localhost:3008","http://localhost:3009"],
    methods: ["POST" , "GET"],
    credentials: true
}));
app.use(cookieParser());


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"sdgp_islandbites"

});

app.post("/signup" , (req,res) =>{ 
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

app.listen(8800, ()=>{
    console.log("Connected to backend!");
})

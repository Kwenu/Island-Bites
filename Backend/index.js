app.post("/recipes", upload.single('file'), (req,res)=>{
    const q = "INSERT INTO recipes (ingredients,description,instructions,img,userId,createdAt) VALUES (?)";
    const values = [         
        req.body.ingredients,
        req.body.description,
        req.body.instructions,
        req.file.filename,
        req.body.userId,
        req.body.createdAt,
];

    db.query(q,[values], (err,data)=>{
        if(err) return res.json(err);
        return res.json("Recipe has been created successfully..");
    });

});


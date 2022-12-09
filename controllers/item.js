import {db} from "../db.js"


export const getItems  =(req,res)=>{
    const q = "SELECT * FROM items ORDER BY RAND() LIMIT 9" ;

    db.query(q,[req.body],(err,data)=> {
        if (err) return res.json(err)
        //console.log(data)
        return res.status(200).json(data)
    });
};

export const getItem=(req,res)=>{
  console.log(req.params.id)  
  const q =
    "SELECT * FROM users  JOIN items  ON users.id = items.seller_id WHERE items.id = ? ";

  db.query(q, [req.params.id], (err, data) => {
    if (err) 
    {
      console.log(err)
    return res.status(500).json(err);
    }
    console.log(data)
    return res.status(200).json(data[0]);
  });
};




export const addItem=(req,res)=>{
  //   const token = req.cookies.access_token;
  // if (!token) return res.status(401).json("Not authenticated!");

  // jwt.verify(token, "jwtkey", (err, userInfo) => {
  //   if (err) return res.status(403).json("Token is not valid!");

  console.log("wertyui",req.body)
  const {product_name,category,price,desc,seller_id}=req.body
    const q =
      "INSERT INTO items(product_name, category, price, descr,seller_id) VALUES (?)";

    const values = [
      req.body.product_name,
      req.body.category,
      req.body.price,
      req.body.desc,
      req.body.seller_id
    ];

    db.query(q, [values], (err, data) => {
      if (err) {
        console.log(err) 
        return res.status(500).json(err);
      }
      console.log("data",data);
      return res.json("Post has been created.");
    });
  
};



export const  deleteItem=(req,res)=>{
    res.json("from controller")
};
export const updateItem=(req,res)=>{
    res.json("from controller")
};
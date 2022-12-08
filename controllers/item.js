import {db} from "../db.js"


export const getItems  =(req,res)=>{
    const q = "SELECT * FROM items ORDER BY RAND() LIMIT 9";

    db.query(q,[req.body],(err,data)=> {
        if (err) return res.json(err)
        console.log(data)
        return res.status(200).json(data)
    });
};

export const getItem=(req,res)=>{
    const q =
    "SELECT id, `name`, `category`, `desc`, img, , seller_id ,  `name`, bargainable`,  FROM users u JOIN posts p ON u.id = p.uid WHERE p.id = ? ";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};
export const addItem=(req,res)=>{
    const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "jwtkey", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const q =
      "INSERT INTO posts(`title`, `desc`, `img`, `cat`, `date`,`uid`) VALUES (?)";

    const values = [
      req.body.title,
      req.body.desc,
      req.body.img,
      req.body.cat,
      req.body.date,
      userInfo.id,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.json("Post has been created.");
    });
  });
};
export const  deleteItem=(req,res)=>{
    res.json("from controller")
};
export const updateItem=(req,res)=>{
    res.json("from controller")
};
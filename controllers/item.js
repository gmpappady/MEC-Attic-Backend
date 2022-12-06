export const getItems  =(req,res)=>{
    const q = req.query.cat
    ? "SELECT * FROM items WHERE cat=?"
    : "SELECT * FROM items";

    db.query(q,[req.query.cat],(err,data)=> {
        if (err) return res.send(err)

        return res.status(200).json(data);
    });
};
export const getItem=(req,res)=>{
    res.json("from controller")
};
export const addItem=(req,res)=>{
    res.json("from controller")
};
export const  deleteItem=(req,res)=>{
    res.json("from controller")
};
export const updateItem=(req,res)=>{
    res.json("from controller")
};

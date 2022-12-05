import {db} from "../db.js"

export const register=(req,res)=>{

    const q="select * from users where phonenumber=? "

    db.query(q,[re.body.phonenumber],(err,data)=>{
        if (err) return res.json(err)
        if (data.length) return res.status(409).json("User exists")

        const q="insert into users ('phonenumber','password','name') values (?)"
        const values=[
            req.body.phonenumber,
            req.body.password,
            req.body.name
        ]

        db.query(q,[values],(err,data)=>{
            if(err) return res.json(err)
            return res.status(200).json("User registered")
        })
    })
}

export const login=(req,res)=>{

}

export const logout=(req,res)=>{

}


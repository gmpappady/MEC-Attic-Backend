import { db } from "../db.js"
import jwt from "jsonwebtoken"

export const register=(req,res)=>{
    
    //check existing user

    const q="select * from users where phonenumber=? "

    db.query(q,[req.body.phonenumber],(err,data)=>{
        if (err) return res.json(err)
        if (data.length) return res.status(409).json("User exists")

        const q="insert into users (phonenumber,password,name) values (?);"
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
    
    //check user exists
    const q="select * from users where phonenumber=? "
    db.query(q,[req.body.phonenumber],(err,data)=>{
        if (err) return res.json(err)
        if (data.length==0) return res.status(404).json("User not found")

        //password check
        //const isPasswordCorrect=compareSync(req.body.password,data[0].password)
        if(req.body.password=!data[0].password) return res.status(400).json("Wrong username or password")
        
        const token=jwt.sign({id:data[0].id},"jwtkey");
        // const {password,...other}=data[0] to separte pass and other stuff for extra security

        res.cookie("access_token",token,{
            httpOnly:true
        }).status(200).json(data[0])
    })
}




export const logout=(req,res)=>{
    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true
      }).status(200).json("User has been logged out.")
}


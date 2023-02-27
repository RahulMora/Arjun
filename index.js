const express = require ('express')
const app = express();

const Products =[
    {
        id:1,
        name:"Santoor",
        shop:"more"
    },
    {
        id:2,
        name:"Santoor white",
        shop:"sponser"
    },
    {
        id:3,
        name:"rexona",
        shop:"d-mart"
    }

]
app.get("/Products",(req,res)=>{
    res.send(Products)
})

app.get('/Products/:id',(req,res)=>{
    const newData = Products.filter(item=>item.id.tostring() ===req.params.id)
})



app.listen(5001,()=>console.log("Server Running"))
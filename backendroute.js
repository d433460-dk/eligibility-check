const express = require("express")
const router = express.Router()

router.post("/check",(req,res)=>{

const {age,income} = req.body

if(age >= 18 && income <= 50000){
res.json({message:"You are Eligible"})
}
else{
res.json({message:"Not Eligible"})
}

})

module.exports = router
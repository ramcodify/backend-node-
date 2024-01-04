const express = require('express')
const router = express.Router()
const ramcontroller = require('../controllers/ramcontroller')

router.post('/create',async (req,res)=>{
    await ramcontroller.ramtCreate(req,res).then().catch(e=>res.send(e))
})

router.get('/get',async (req,res)=>{
    await ramcontroller.getAllram(req,res).then().catch(e=>res.send(e))
})

router.get('/get/:id',async (req,res)=>{
    await ramcontroller.getramtById(req,res).then().catch(e=>res.send(e))
})

router.put('/update/:id',async (req,res)=>{
    await ramcontroller.updateramtById(req,res).then().catch(e=>res.send(e))
})

router.delete('/delete/:id',async (req,res)=>{
    await ramcontroller.deleteramtById(req,res).then().catch(e=>res.send(e))
})
module.exports = router
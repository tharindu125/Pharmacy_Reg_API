const registerModel = require('../models/register')
const mongoose = require('mongoose')
const { json } = require('express')

//get all Details
const getDetails = async (req,res) => {
    const register = await registerModel.find({}).sort({createdAt: -1})

    res.status(200).json(register)
}

//get a single Detail
const getDetail = async (req,res) => {
    try {
        const {email} = req.params
        const register = await registerModel.findOne({email})
        if (register.length == 0) throw Error("Not Found")
        res.status(200).json(register)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


//create new Details
const createDetails = async (req,res) => {
    const {f_name, l_name, m_number, email, password} = req.body
    //add doc to db
    try{
        const register = await registerModel.create({f_name, l_name, m_number, email, password})
        res.status(200).json(register)
    }
    catch(error){
        res.status(400).json({error: error.message})
    }
}


module.exports = {
    getDetails,
    getDetail,
    createDetails,
}
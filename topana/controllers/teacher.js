const Teacher = require("../models/teacher");

const getTeacher = async(req,res) => {
    const queryParam = req.query;
    if(queryParam.isCabron){
        try{
            const teacher = await Teacher.find({isCabron:queryParam.isCabron});
            res.status(200).json(teacher);
        } catch(err) {
            res.status(500).json({message:err});
        }
    }else{
        try{
            const teacher = await Teacher.find();
            res.status(200).json(teacher);
        } catch(err) {
            res.status(500).json({message:err});
        }
    }
}

const getTeacherId = async(req,res) => {
    const id = req.params.id;
    if(id){
        try{
            const teacher = await Teacher.findById(id);
            res.status(200).json(teacher);
        } catch(err) {
            res.status(500).json({message:err});
        }
    }else{
        res.status(400).json({message:err});
    }
}

const postTeacher = async(req,res) => {
    const body = req.body;
    const newTeacher = new Teacher(body);
    try{
        await newTeacher.save();
        res.status(201).json(newTeacher);
    } catch(err) {
        res.status(500).json({message:err});
    }
}

const editTeacher = async(req,res) => {
    const id = req.params.id;
    const body = req.body
    if(id){
        try{
            const teacher = await Teacher.findByIdAndUpdate(id,body);
            res.status(203).json(teacher);
        } catch(err) {
            res.status(500).json({message:err});
        }
    }else{
        res.status(400).json({message:err});
    }
}

const deleteTeacher = async(req,res) => {
    const id = req.params.id;

    if(id){
        try{
            const teacher = await Teacher.findByIdAndDelete(id);
            res.status(204).json(teacher);
        } catch(err) {
            res.status(500).json({message:err});
        }
    }else{
        res.status(400).json({message:err});
    }
}

module.exports = {getTeacher,getTeacherId,postTeacher,editTeacher,deleteTeacher};
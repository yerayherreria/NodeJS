const express = require("express");
const router = express.Router();
const {getTeacher,getTeacherId,editTeacher,postTeacher,deleteTeacher} = require("../controllers/teacher")
const {check} = require("express-validator");
const {validationFields} = require("../middleware/validate-fields");
const { existsMote } = require("../helpers/db-validators");


router
.route("/")
.get(getTeacher)
.post([
    check("name","Name is required").not().isEmpty(),
    check("mote","Mote is required").not().isEmpty(),
    check("mote").custom(existsMote),
    validationFields
],postTeacher);

router
.route("/:id")
.get(getTeacherId)
.put(editTeacher)
.delete(deleteTeacher);

module.exports=router;
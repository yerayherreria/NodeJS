const express = require("express");
const router = express.Router();
const {getAthelete,addAthelete,deleteAthelete,putAthelete} = require('../controllers/atheletes');
const {check} = require("express-validator");
const {validationFields} = require("../middlewares/validate-fields");

router
.route("/")
.get(getAthelete)
.post([
    check('name','Name is required').not().isEmpty(),
    check('age', 'Ages should be a number').isNumeric(),
    validationFields
],addAthelete);

router
.route("/:id")
.delete(deleteAthelete)
.put(putAthelete);  

module.exports=router;
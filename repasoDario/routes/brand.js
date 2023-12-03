const express = require("express");
const router = express.Router();
const {getBrand,addBrand,editBrand,deleteBrand} = require("../controllers/brand");
const {check} = require("express-validator");
const {validationFields} = require("../middlewares/validate-fields");

router
.route("/")
.get(getBrand)
.post([check('name','Name is required').not().isEmpty(),
        check('name','Name is string').isString(),
        validationFields
],addBrand);

router
.route("/:id")
.delete(deleteBrand)
.put([check('name','Name is required').not().isEmpty(),
    check('name','Name is string').isString(),
    validationFields
],editBrand);

module.exports=router
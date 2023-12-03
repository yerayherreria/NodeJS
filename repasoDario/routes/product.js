const express = require("express");
const router = express.Router();
const {getProduct,addProduct,editProduct,deleteProduct} = require("../controllers/product");
const {check} = require("express-validator");
const {validationFields} = require("../middlewares/validate-fields");

router
.route("/")
.get(getProduct)
.post([
    check("name","Name is required").not().isEmpty(),
    check("type","Type is required").not().isEmpty(),
    check("price","Price is required").not().isEmpty(),
    check("name","Name is string").isString(),
    check("type","Type is string").isString(),
    check("price","Price is number").isNumeric(),
    validationFields
],addProduct)

router
.route("/:id")
.put([
    check("name","Name is required").not().isEmpty(),
    check("type","Type is required").not().isEmpty(),
    check("price","Price is required").not().isEmpty(),
    check("name","Name is string").isString(),
    check("type","Type is string").isString(),
    check("price","Price is number").isNumeric(),
    validationFields
],editProduct)
.delete(deleteProduct)

module.exports=router
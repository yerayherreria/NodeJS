const express = require("express");
const router = express.Router();
const {getAnimal,postnimal,putAnimal,deleteAnimal} = require("../controllers/animal");
const {check} = require("express-validator");
const {validationFields} = require("../middleware/validate-fields");
const {existNamePOST} = require("../helpers/db-validator");
router
.route("/")
.get(getAnimal)
.post([
    check("name","Name is required").not().isEmpty(),
    check("name").custom(existNamePOST),
    validationFields
],postnimal);

router
.route("/:id")
.put(putAnimal)
.delete(deleteAnimal);

module.exports=router;
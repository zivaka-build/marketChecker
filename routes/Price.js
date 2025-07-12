const express = require("express");
const router = express.Router();
const upload = require("../middlewares/Fileupload");

const {createNewAdmin} = require("../Controller/Admin/createNewAdmin");
router.get('/deleteAdminByAdminName/:adminName' , deleteAdminByAdminName)

module.exports = router;

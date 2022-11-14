const router = require("express").Router();
const bpjsController = require("../controller/bpjs.controller");

router.get("/", bpjsController.renderAllMember);

module.exports = router;

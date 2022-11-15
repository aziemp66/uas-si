const router = require("express").Router();
const bpjsController = require("../controller/bpjs.controller");

router.get("/", bpjsController.renderAllMember);

router.get("/member-medical/:id", bpjsController.renderMemberMedicalRecord);

router.get("/medical-record/:id", bpjsController.renderMedicalRecord);

router.get("/member/:id", bpjsController.renderMemberData);

module.exports = router;

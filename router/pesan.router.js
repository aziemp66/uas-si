const router = require("express").Router();

const pesanController = require("../controller/pesan");

router.get("/", pesanController.GetPesan);
router.post("/", pesanController.PostPesan);
router.delete("/:id", pesanController.DeletePesan);
router.patch("/:id", pesanController.UpdatePesan);

module.exports = router;

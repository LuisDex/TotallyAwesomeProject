const router = require("express").Router();
const storeController = require("../../controllers/storeController");

// Matches with "/api/store"
router.route("/")
  .get(storeController.findAll)
  .post(storeController.create);

// Matches with "/api/store/:id"
// router
//   .route("/:id")
//   .get(storeController.findById)
//   .put(storeController.update)
//   .delete(storeController.remove);

router.route("/:email")
.get(storeController.findOne)
.put(storeController.update);

// Matches with "/api/store/:name"
// router.route("/:name")
// .get(storeController.findOne);

module.exports = router;
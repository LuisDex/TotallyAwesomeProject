const router = require("express").Router();
const userRoutes = require("./user");
const storeRoutes = require("./store");
const eventRoutes = require("./event");

// Api routes
router.use("/user", userRoutes);
router.use("/store", storeRoutes);
router.use("/event", eventRoutes);


module.exports = router;
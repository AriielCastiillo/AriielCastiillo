const pushNotificacionController = require("../controllers/push-notification.controllers");

const express = require("express");
const router = express.Router();

router.get("/SendNotificacion",pushNotificacionController.SendNotification);

router.post("/SendNotificacionToDevice",pushNotificacionController.SendNotificationToDevice);
 
module.exports = router;